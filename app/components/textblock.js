import className from 'className';

export const Block = (props) => (
    <div className='textblock'>
        {props.children}
    </div>
);

export const Column = (props) => {
    const colClass = className('textblock__column', {
        'textblock__column--centered': props.center
    });

    const textClass = className('textblock__text', {
        'textblock__text--justified': props.justify
    });

    return (
        <div className={colClass}>
            <div className={textClass}>
                {props.children}
            </div>
        </div>
    );
};

export const ColumnHeading = (props) => (
    <h2 className='textblock__title'>{props.children}</h2>
);

export const P = (props) => (
    <p className='page__paragraph'>{props.children}</p>
);
