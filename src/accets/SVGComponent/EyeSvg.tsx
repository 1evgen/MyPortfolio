import * as React from "react"
import { SVGProps, Ref, forwardRef, memo } from "react"
import styled, {css, keyframes} from "styled-components";


type PropsType = {
    isActive: boolean
}
const SvgComponent = (
    props: SVGProps<SVGSVGElement> & PropsType,
    ref: Ref<SVGSVGElement>

) => (
    <WrapperEye isActive={props.isActive}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        ref={ref}
        {...props}
    >
        <g filter="url(#a)">
            <circle cx={6} cy={6} r={2} fill="#FA0000" />
            <circle cx={6} cy={6} r={3} stroke="#5A0000" />
        </g>
        <defs>
            <filter
                id="a"
                width={16}
                height={16}
                x={0}
                y={0}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0.876389 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_27_6" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_27_6"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
    </WrapperEye>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export { Memo as EyeSvg }



const fireEye = keyframes`
 0%{
   opacity: 0;
 }
  100%{
    opacity: 100%;
  }
    
`


const WrapperEye = styled.div<{isActive: boolean}>`
position: absolute;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  transition: opacity 5s ease; /* задержка перехода */
  
`