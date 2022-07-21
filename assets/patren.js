import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 399.86 367.76"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="linear-gradient"
          x1={132.18}
          y1={146.55}
          x2={424.94}
          y2={392.63}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.21} stopColor="#80c341" />
          <Stop offset={0.36} stopColor="#68bf43" />
          <Stop offset={0.64} stopColor="#40b848" />
          <Stop offset={0.86} stopColor="#27b44a" />
          <Stop offset={1} stopColor="#1eb24b" />
        </LinearGradient>
      </Defs>
      <Path
        d="M322 75a199.42 199.42 0 00-29.75-7.25S252.77 61.26 204 71c-8.91 1.78-17.48 3.87-18 4-13.42 3.44-23.29 7-26 8a211.61 211.61 0 00-33 15c-9.46 5.43-26.78 15.58-43 35-8.15 9.76-21.15 25.33-26.21 49.06-3.11 14.58-2.24 27.69-1.79 33.94a148.07 148.07 0 004.62 26.75C63.45 253.89 68 269.1 88 314c10.65 23.94 14.48 31.17 16 34 6.09 11.34 13.1 24.23 25 38.88A199.08 199.08 0 00150 409a111.92 111.92 0 0035 19c22.55 7.38 41.76 5.52 56 4a178.27 178.27 0 0041-9.62c16.64-5.71 28.43-12.27 52-25.38 17.19-9.56 29.74-16.54 46-28 15.06-10.61 26.74-18.84 40-33 11.27-12 21.92-23.65 28.62-42.25 4.84-13.42 5.83-25.54 6.38-32.75a148.18 148.18 0 00-1-31c-3.66-26.8-13.7-46.05-19-56a198 198 0 00-13-21 225.27 225.27 0 00-24-29c-10.26-10.41-35.35-35.29-76-49z"
        transform="translate(-55.54 -65.63)"
        fill="url(#linear-gradient)"
      />
    </Svg>
  )
}

export default SvgComponent
