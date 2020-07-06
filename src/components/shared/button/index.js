import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { ButtonWrap, AnchorButton } from './button.stc';

const Button = ({ children, ...props }) => {
    const { to, icon, ...restProps } = props;
    const internal = /^\/(?!\/)/.test(to);
    const classes = icon && 'hasIcon';
    if (to) {
        if (internal) {
            return (
                <ButtonWrap as={Link} {...props} className={classes}>
                    <span className="btn-span">
                        {props.iconposition === 'left' && icon && <span className="icon">{icon}</span>}
                        {children}
                        {props.iconposition === 'right' && icon && <span className="icon">{icon}</span>}
                    </span>
                </ButtonWrap>
            )
        } else {
            return (
                <AnchorButton href={to} {...restProps} className={classes}>
                    <span className="btn-span">
                        {props.iconposition === 'left' && icon && <span className="icon">{icon}</span>}
                        {children}
                        {props.iconposition === 'right' && icon && <span className="icon">{icon}</span>}
                    </span>
                </AnchorButton>
            )
        }
    } else {
        return (
            <ButtonWrap {...props} className={classes}>
                <span className="btn-span">
                    {props.iconposition === 'left' && icon && <span className="icon">{icon}</span>}
                    {children}
                    {props.iconposition === 'right' && icon && <span className="icon">{icon}</span>}
                </span>
            </ButtonWrap>
        )
    }
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    colors: PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'gradient',
        'transparent'
    ]),
    btnsize: PropTypes.oneOf(['fullwidth', 'large', 'medium', 'small', 'xsmall']),
    shape: PropTypes.oneOf(['rectangle', 'rounded', 'bullet']),
    varient: PropTypes.oneOf(['contained', 'outlined', 'texted', 'underlined', 'iconButton']),
    iconposition: PropTypes.oneOf(['left', 'right']),
    textTansform: PropTypes.oneOf(['uppercase', 'lowrcase', 'capitalize'])
};

Button.defaultProps = {
    fontWeight: 500,
    btnsize: 'medium',
    iconposition: 'right',
    display: 'inline-block',
    iconcss: {}
}


export default Button
