"use client";
import { useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export default function Hero() {
  useEffect(() => {
    const path = document.querySelector<SVGElement>(".svgPath")!;
    const container = document.querySelector<HTMLDivElement>("#svg_container")!;

    /* @ts-ignore*/
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = pathLength;

    const handleScroll = () => {
      // what % down it is
      const scrollPercentage =
        document.documentElement.scrollTop /
        (container.scrollHeight - document.documentElement.clientHeight);

      // console.log(document.documentElement.scrollHeight)//7458
      // console.log(container.scrollHeight)// 3056
      // console.log(`🚀  ~ scrollPercentage:`, scrollPercentage)

      // length to offset the dashes
      const drawLength = pathLength * scrollPercentage;
      // draw in reverse
      path.style.strokeDashoffset = `${pathLength - drawLength}`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(
    "%c Shehzad✨",
    "font-weight: bold; font-size: 48px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)",
  );
  console.log(
    "%c It's a typical developer urge to open console 😉 \nContact me +923033111499 📡",
    "background: #31f711; color: black; font-size:20px",
  );

  return (
    <div id="svg_container" className="flex min-h-[200vh] md:min-h-[400vh]">
      <div className="absolute top-24 md:top-16 left-[42%] flex flex-col items-center text-lg font-extralight md:left-[47%]">
        SCROLL
        <MdOutlineKeyboardDoubleArrowDown className="animate-bounce text-3xl" />
      </div>

      <div className="sticky top-[50vh] left-0 h-full w-full overflow-hidden md:top-[30vh]">
        <svg
          preserveAspectRatio="xMidYMax meet"
          className="stroke-accent stroke-[6]"
          fill="none"
          viewBox="0 0 804 209"
          strokeDashoffset={3340.22}
          strokeDasharray={3340.22}
        >
          <g filter="url(#filter0_d_3_41)">
            <path
              className="svgPath"
              d="M6 118.132C23.1118 118.132 40.6188 119.519 57.6527 118.02C85.4126 115.578 111.446 105.714 134.434 89.2474C146.892 80.3232 164.202 64.3045 173.952 52.3334C178.916 46.2381 206.076 13.2009 188.073 3.65369C177.396 -2.00849 162.051 8.26936 154.891 13.4677C144.628 20.9186 135.582 30.2867 131.105 42.6866C125.99 56.8511 134.994 71.9662 137.441 85.7344C145.115 128.925 129.375 177.529 89.3316 196.532C78.0462 201.888 53.2434 198.794 46 188.391C42.2464 183 61.5914 186.208 64 186C72.0347 185.305 76.0989 183.204 83.4791 180.25C103.844 172.099 123.796 163.585 142.649 152.035C170.959 134.69 192.124 110.844 212.074 84.0058C223.027 69.2703 233.302 53.9258 242.679 38.0585C247.327 30.1926 261.916 7.29124 255.726 13.9138C234.2 36.9465 215.748 69.0529 197 94.712C188.189 106.77 179 118.5 171 123.5C165 130 162 133 159 135.529C157 138 150.144 141.376 149.683 145.12C149.396 147.445 154.415 145.914 156.448 144.897C164.867 140.688 175.705 132.781 183.08 127.611C191.944 121.397 201.497 114.089 211 108.764C216.095 105.909 224.479 101.487 230.813 102.519C235.6 103.298 233.856 114.901 233.497 117.63C231.952 129.398 226.185 137.288 220.128 146.793C217.986 150.155 216.273 153.685 214.544 157.276C214.52 157.326 213.518 159.06 214.222 158.838C217.908 157.672 222.092 151.768 224.746 149.358C237.452 137.82 251.113 128.217 267.968 124.823C278.543 122.694 293.651 124.744 300.614 114.117C302.229 111.651 307.726 96.2393 301.956 94.712C293.806 92.5546 281.451 99.2251 275.324 103.857C265.292 111.441 260.68 122.979 260.344 135.529C260.262 138.596 261.355 145.86 264.5 146.793C269.279 151.477 268.39 152.704 273 154.488C275.727 156.954 285.851 156.568 290 154.488C297.987 150.484 303.5 148.524 310.547 142.89C321.617 134.039 329.059 118.576 334.816 105.976C345.755 82.0364 358.335 58.9081 366.656 34C376.292 5.15739 343.43 90.2615 332.991 118.801C330.272 126.233 326.801 133.475 324.937 141.217C324.633 142.479 323.659 147.408 324.185 142.221C325.609 128.175 328.777 114.444 343.139 110.716C351.969 108.423 366.305 104.186 374 110.716C375.622 112.092 375.346 113.795 374 116C372.278 118.82 373.702 118.911 371.811 122.648C368.602 128.991 367.724 136.854 366.656 143.838C366.592 144.262 364.855 149.74 365.905 146.905C367.02 143.892 369.209 143.526 371.596 142.109C375.206 139.967 377.782 133.691 380.885 130.734C387.695 124.243 409.157 104.402 418 102.519C426.843 100.635 423.5 98.2807 429.423 99.1729C436.777 95.5949 449.301 99.1327 457.505 98.2807C459.571 98.0662 473.484 98.5503 472.807 99.1729C467.888 103.703 461.379 106.77 456.163 110.994C447.141 118.302 438.853 126.405 429.423 133.187C421.001 139.246 413.052 144.857 406.121 152.815C399.344 160.597 405.907 159.476 412.94 159.116C424.829 158.509 449.825 159.73 456.163 156.273C462.5 152.815 472.807 152.035 481 130.567C490.87 126.895 495.139 123.31 505.238 120.53C513.496 118.256 521.177 114.309 529.668 112.946C531.528 112.648 545.854 111.143 533.266 112.388C522.318 113.471 511.982 117.273 502.661 123.373C495.076 128.337 490.92 135.018 488.701 144.005C487.142 150.316 483.909 163.049 491.17 167.202C502.155 173.484 521.244 166.451 525.695 154.544C527.968 148.464 526.614 141.217 527.091 134.86C527.496 129.47 529.053 124.328 530.903 119.303C530.991 119.065 528.231 128.502 527.628 130.845C524.972 141.16 528.01 151.869 530.474 161.96C531.317 165.416 533.373 170.999 536.273 165.083C541.569 154.274 542.8 142.836 551.092 133.355C558.674 124.685 568.55 122.673 579.12 120.585C589.564 118.523 600.031 114.67 610.691 114.117C612.872 114.004 619.425 114.117 617.242 114.117C611.192 114.117 605.143 114.117 599.094 114.117C586.119 114.117 569.844 115.325 564.784 130.567C561.027 141.881 557.598 164.622 571.71 169.878C578.574 172.435 586.534 172.404 593.724 172.332C605.303 172.216 608.833 167.35 613.376 156.273C620.046 140.009 621.027 123.288 622.182 105.864C623.53 85.5255 628.5 75 635.5 54C638.5 43.5 657.394 1.38137 656 12C655.281 17.4795 641 49.5 639.5 54C633.996 70.5114 630.979 70.5 627 86.5C626.631 107.4 623.945 123.21 624.651 144.117C624.8 148.524 624.092 156.75 628.947 159.061C634.536 161.721 643.503 161.013 646.451 154.6C649.262 148.483 646.656 135.066 651.82 130.734C655.155 127.936 657.013 122.147 661.861 122.147C667.105 122.147 672.349 122.147 677.593 122.147C682.166 122.147 688.008 123.106 692.412 121.477C695.462 120.349 692.849 116.338 692.197 114.452C690.13 108.47 682.5 100.48 679 96C670.5 85.121 669.337 82.0458 669.5 73.5C669.692 63.426 688.626 63.8694 695.5 68.5C701.387 72.4657 707.152 79.1733 707.661 85.121C708.114 90.4207 719.66 70.227 724.735 69.5C731.5 65 735.649 64.4328 742.5 71C748.343 76.6018 737.329 93.9891 733.5 95.5C729.5 100.5 728 100 724.735 103C720.926 106.5 710.5 112 705.352 116.459C702.629 122.798 701.589 121.779 710.5 122.147C716.007 122.374 719.074 120.697 724.735 121.477C730.353 120.441 735.444 120.837 741.058 121.031C760.214 121.693 798.456 123.5 798.456 123.5"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_3_41"
              x="0.5"
              y="0.499512"
              width="803.456"
              height="208.116"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              {/* <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> */}
              {/* <feOffset dy="4" /> */}
              <feGaussianBlur stdDeviation="2" />
              {/* <feComposite in2="hardAlpha" operator="out" /> */}
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3_41"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3_41"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        {/* <svg
          className="stroke-accent stroke-[6]"
          preserveAspectRatio="xMidYMax meet"
          strokeDashoffset={3340.22}
          strokeDasharray={3340.22}
          viewBox="0 0 1048 202" fill="none"
        >
          <path
            className="svgPath"
            d="M2 118C19.7054 118 37.8197 119.382 55.4444 117.889C84.1673 115.456 111.104 105.628 134.889 89.2222C147.78 80.331 165.69 64.3714 175.778 52.4445C180.914 46.3717 209.016 13.4564 190.389 3.94447C179.341 -1.69682 163.464 8.54309 156.056 13.7222C145.436 21.1457 136.077 30.4792 131.444 42.8334C126.152 56.9456 135.469 72.0049 138 85.7222C145.94 128.754 129.654 177.178 88.2222 196.111C76.5454 201.447 65.3835 201.254 57.8889 190.889C56.6765 189.212 55.619 188.208 58.1111 188C66.4245 187.307 74.5304 182.832 82.1667 179.889C103.238 171.769 123.882 163.286 143.389 151.778C172.682 134.497 194.581 110.739 215.222 84C226.555 69.3189 237.187 54.031 246.889 38.2222C251.698 30.3854 266.793 7.56859 260.389 14.1667C238.116 37.1143 215.566 58.7135 196.167 84.2778C187.05 96.2917 176.729 107.278 167.556 119.222C163.628 124.337 162.195 126.826 158.722 132.111C156.842 134.972 151.144 141.158 150.667 144.889C150.37 147.205 155.563 145.679 157.667 144.667C166.378 140.473 177.591 132.595 185.222 127.444C194.394 121.254 204.278 113.972 214.111 108.667C219.382 105.822 228.057 101.416 234.611 102.444C239.564 103.221 237.76 114.781 237.389 117.5C235.79 129.225 229.823 137.085 223.556 146.556C221.339 149.905 219.567 153.422 217.778 157C217.753 157.049 216.717 158.777 217.444 158.556C221.259 157.395 225.587 151.512 228.333 149.111C241.48 137.616 255.616 128.048 273.056 124.667C283.997 122.545 299.629 124.588 306.833 114C308.505 111.543 314.192 96.1883 308.222 94.6667C299.79 92.5173 287.006 99.1632 280.667 103.778C270.287 111.333 265.514 122.83 265.167 135.333C265.082 138.389 264.857 141.07 268.111 142C273.07 143.417 276.661 147.595 280.444 150.889C283.266 153.345 287.819 159.295 292.111 157.222C300.375 153.233 309.82 148.28 317.111 142.667C328.565 133.848 336.265 118.443 342.222 105.889C353.54 82.0379 360.446 56.8718 369.056 32.0556C379.025 3.31942 351.135 90.2327 340.333 118.667C337.52 126.072 333.928 133.286 332 141C331.686 142.258 330.678 147.168 331.222 142C332.695 128.006 335.973 114.326 350.833 110.611C359.97 108.327 378.149 101.828 386.111 108.333C387.79 109.705 390.282 114.914 388.889 117.111C387.107 119.92 382.456 118.777 380.5 122.5C377.18 128.819 376.271 136.653 375.167 143.611C375.1 144.033 373.303 149.491 374.389 146.667C375.543 143.665 377.808 143.3 380.278 141.889C384.013 139.754 386.679 133.502 389.889 130.556C396.935 124.089 404.74 121.877 413.889 120C425.417 117.635 434.121 111.608 444.667 106.667C452.275 103.102 460.678 99.0711 469.167 98.2222C471.305 98.0085 485.7 98.4908 485 99.1111C479.91 103.625 473.175 106.68 467.778 110.889C458.443 118.169 449.868 126.243 440.111 133C431.396 139.036 423.172 144.626 416 152.556C408.988 160.308 415.779 159.191 423.056 158.833C435.357 158.228 447.132 155.713 459.222 154.222C462.884 153.771 463.358 154.101 464.222 150.333C466.969 138.365 476.011 132.31 487.111 128.333C497.323 124.675 508.106 123.16 518.556 120.389C527.1 118.123 535.047 114.191 543.833 112.833C545.757 112.536 560.58 111.037 547.556 112.278C536.228 113.357 525.534 117.144 515.889 123.222C508.041 128.168 503.741 134.823 501.444 143.778C499.832 150.066 496.487 162.751 504 166.889C515.366 173.148 535.117 166.141 539.722 154.278C542.074 148.22 540.673 141 541.167 134.667C541.585 129.296 543.197 124.174 545.111 119.167C545.202 118.93 542.347 128.332 541.722 130.667C538.974 140.943 542.118 151.613 544.667 161.667C545.54 165.11 547.667 170.672 550.667 164.778C556.147 154.009 557.42 142.613 566 133.167C573.845 124.53 584.063 122.524 595 120.444C605.807 118.39 616.637 114.552 627.667 114C629.923 113.887 636.704 114 634.444 114C628.185 114 621.926 114 615.667 114C602.242 114 585.403 115.204 580.167 130.389C576.28 141.661 572.732 164.319 587.333 169.556C594.436 172.103 602.671 172.072 610.111 172C622.091 171.884 625.744 167.036 630.444 156C637.346 139.796 638.361 123.137 639.556 105.778C640.951 85.5141 643.428 65.4859 645.889 45.3334C647.183 34.7348 651.776 3.03169 650.333 13.6111C649.589 19.0705 647.922 24.3657 646.889 29.7778C643.634 46.8324 642.318 63.7661 642 81.1111C641.618 101.934 641.38 123.06 642.111 143.889C642.265 148.28 641.532 156.476 646.556 158.778C652.338 161.428 661.617 160.723 664.667 154.333C667.575 148.24 664.879 134.872 670.222 130.556C673.673 127.768 675.595 122 680.611 122C686.037 122 691.463 122 696.889 122C701.621 122 707.666 122.956 712.222 121.333C715.378 120.209 712.675 116.213 712 114.333C709.861 108.374 709.423 102.03 707.444 96C704.833 88.0412 701.831 80.5143 702 72C702.199 61.9632 716.999 60.5532 724.111 65.1667C730.202 69.1178 727.473 79.1853 728 85.1111C728.469 90.3913 731.749 72.7243 737 72C745.665 70.8048 751.467 69.2904 758.556 75.8334C764.602 81.4145 749.628 90.0503 745.667 91.5556C740.647 93.4632 735.739 92.5893 734 99.1111C732.328 105.381 728.256 110.406 725.611 116.333C722.793 122.649 719.557 124.967 728.778 125.333C734.476 125.559 739.101 122.635 744.556 121.667C750.369 120.634 756.747 120.696 762.556 120.889C782.377 121.548 802.152 123.664 821.944 124.833C896.459 129.236 971.379 128.605 1046 130"
            strokeLinecap="round" />
        </svg> */}
      </div>
    </div>
  );
}
