const SvgComponent = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={840} height={1024} fill="none">
      <g filter="url(#a)">
        <path
          fill="#FFA927"
          fillRule="evenodd"
          d="M606.859 216.634c88.817 21.152 89.269 147.423 142.269 221.766 37.084 52.019 109.609 78.843 117.252 142.269 8.184 67.922-36.89 126.77-78.267 181.254-50.735 66.806-97.918 150.873-181.254 160.473-87.78 10.112-177.914-40.796-228.448-113.279-45.316-64.998-9.323-149.214-9.8-228.448-.483-80.157-36.865-164.145 7.031-231.217 50.6-77.314 141.331-154.225 231.217-132.818Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <filter
          id="a"
          width={1221.35}
          height={1418.68}
          x={0}
          y={-141}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_725_197"
            stdDeviation={177}
          />
        </filter>
      </defs>
    </svg>
  )
  export default SvgComponent
  