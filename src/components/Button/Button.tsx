import {FC} from 'react';

import css from './Button.module.sass';

type ButtonProp = {
    text: string,
    click: () => void
}

const Button: FC<ButtonProp> = ({text, click}) => {
    return (
        <button className={css.btn} onClick={click} type={'submit'}>
            {text}
        </button>
    );
};

export {Button};