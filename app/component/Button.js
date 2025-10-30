"use client";

import React, { forwardRef } from "react";

// 간단한 className 결합 유틸
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

const baseStyles =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed select-none";

const variantStyles = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400",
  secondary:
    "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 active:bg-gray-100 disabled:text-gray-400 disabled:bg-gray-100",
  ghost:
    "bg-transparent text-gray-900 hover:bg-gray-100 active:bg-gray-200 disabled:text-gray-400",
};

const sizeStyles = {
  sm: "h-8 px-3 text-sm gap-1.5",
  md: "h-10 px-4 text-sm gap-2",
  lg: "h-12 px-5 text-base gap-2.5",
};

/**
 * Tailwind 기반 버튼 컴포넌트
 * - props
 *   - children: 버튼 라벨/내용
 *   - variant: "primary" | "secondary" | "ghost"
 *   - size: "sm" | "md" | "lg"
 *   - disabled: 비활성화 여부
 *   - loading: 로딩 상태(aria-busy, disabled 처리)
 *   - startIcon, endIcon: 아이콘 슬롯(ReactNode)
 *   - type: 버튼 타입(기본값 "button")
 *   - fullWidth: 가로 전체 너비 여부
 *   - className: 추가 클래스
 */

const Button = forwardRef(function Button(
  {
    children = "버튼",
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    startIcon,
    endIcon,
    type = "button",
    fullWidth = false,
    className,
    ...props
  },
  ref
) {
  const classes = cx(
    baseStyles,
    variantStyles[variant] || variantStyles.primary,
    sizeStyles[size] || sizeStyles.md,
    fullWidth && "w-full",
    className
  );

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      {...props}
    >
      {/* 로딩 스피너 */}
      {loading && (
        <span
          className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}

      {/* 앞 아이콘 */}
      {startIcon && !loading && <span className="inline-flex items-center">{startIcon}</span>}

      {/* 라벨 */}
      <span>{children}</span>

      {/* 뒤 아이콘 */}
      {endIcon && <span className="inline-flex items-center">{endIcon}</span>}
    </button>
  );
});

export default Button;