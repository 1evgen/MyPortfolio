import React, {ReactElement, ReactNode} from 'react';

export const ButtonDefaultAsType = 'button' as const
export type ButtonDefaultAsType = typeof ButtonDefaultAsType

type  ButtonOwnProps<T extends  ReactElement> = {
    children: ReactNode
    as?: T
}


// export const Button<> = (props: ButtonOwnProps<T >) => {
//     return (
//         <div>
//
//         </div>
//     );
// };

