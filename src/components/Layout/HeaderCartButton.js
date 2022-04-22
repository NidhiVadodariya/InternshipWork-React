import { useContext ,useEffect ,useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';


const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const [btnISHighLighted, setbtnISHighLighted] = useState(false);
    const {items} = cartCtx;
    
    const numberOfCartItems = cartCtx.items.reduce((curNumber,item) => { return curNumber + item.amount} , 0)
   
    const btnClasses = `${classes.button} ${btnISHighLighted ? classes.bump : '' }`;
    
    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setbtnISHighLighted(true);
        const timer = setTimeout(() => {
            setbtnISHighLighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton