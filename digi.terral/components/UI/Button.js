import Link from 'next/link';

const Button = ({
    children,
    href,
    onClick,
    type = 'button',
    variant = 'primary',
    className = ''
}) => {
    const baseClasses = 'font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg';

    const variants = {
        primary: 'bg-secondary hover:bg-green-600 text-white',
        outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary'
    };

    const classes = `${baseClasses} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {children}
        </button>
    );
};

export default Button;