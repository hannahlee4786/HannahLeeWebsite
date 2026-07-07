"use client";

import { useLayoutEffect, useRef, useState, ReactNode } from "react";

const MIN_SCALE = 0.6;
const EDGE_PADDING = 40;

interface Bounds {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

interface ResponsiveCanvasProps {
  children: ReactNode;
  designWidth?: number;
}

export default function ResponsiveCanvas({
  children,
  designWidth = 850,
}: ResponsiveCanvasProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [shiftLeft, setShiftLeft] = useState(0);

  useLayoutEffect(() => {
    function measureNaturalBounds(el: HTMLDivElement): Bounds {
      const parentRect = el.getBoundingClientRect();
      let minX = 0, maxX = parentRect.width, minY = 0, maxY = parentRect.height;

      el.querySelectorAll("*").forEach((child) => {
        const rect = child.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) return;
        minX = Math.min(minX, rect.left - parentRect.left);
        maxX = Math.max(maxX, rect.right - parentRect.left);
        minY = Math.min(minY, rect.top - parentRect.top);
        maxY = Math.max(maxY, rect.bottom - parentRect.top);
      });

      return {
        left: minX - EDGE_PADDING,
        right: maxX + EDGE_PADDING,
        top: minY - EDGE_PADDING,
        bottom: maxY + EDGE_PADDING,
      };
    }

    function applyMeasurement() {
      const el = contentRef.current;
      if (!el) return;

      const bounds = measureNaturalBounds(el);
      const naturalWidth = bounds.right - bounds.left;
      const naturalHeight = bounds.bottom - bounds.top;

      const viewportWidth = window.innerWidth;
      const horizontalPadding = viewportWidth < 500 ? 16 : 0;
      const availableWidth = viewportWidth - horizontalPadding * 2;

      const rawScale = availableWidth / designWidth;
      const newScale = Math.min(1, Math.max(MIN_SCALE, rawScale));

      setScale(newScale);
      setContainerSize({
        width: naturalWidth * newScale,
        height: naturalHeight * newScale,
      });
      setShiftLeft(-bounds.left);
    }

    function waitForImagesThenMeasure() {
      const el = contentRef.current;
      if (!el) return;

      const imgs = Array.from(el.querySelectorAll("img"));
      const pending = imgs.filter((img) => !img.complete);

      if (pending.length === 0) {
        applyMeasurement();
        return;
      }

      let remaining = pending.length;
      const onSettle = () => {
        remaining -= 1;
        if (remaining <= 0) applyMeasurement();
      };

      pending.forEach((img) => {
        img.addEventListener("load", onSettle, { once: true });
        img.addEventListener("error", onSettle, { once: true });
      });
    }

    applyMeasurement();
    waitForImagesThenMeasure();

    if ("fonts" in document) {
      (document as any).fonts.ready.then(applyMeasurement);
    }

    const settleTimer = setTimeout(applyMeasurement, 500);

    window.addEventListener("resize", applyMeasurement);
    return () => {
      window.removeEventListener("resize", applyMeasurement);
      clearTimeout(settleTimer);
    };
  }, [designWidth]);

  return (
    <div
      style={{
        width: "100%",
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div
        style={{
          width: containerSize.width || "100%",
          height: containerSize.height || "auto",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: designWidth,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            marginLeft: shiftLeft,
            position: "relative",
          }}
        >
          <div ref={contentRef} style={{ position: "relative" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}