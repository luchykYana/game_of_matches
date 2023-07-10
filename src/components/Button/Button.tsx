import css from './Button.module.sass';

type ButtonProp = {
    text: string,
    click: () => void
}

const Button = ({text, click}: ButtonProp) => {
    return (
        <button className={css.btn} onClick={click} type={'submit'}>
            {text}
        </button>
    );
};

export {Button};