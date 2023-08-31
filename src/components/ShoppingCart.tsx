import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCartContext } from "../context/ShoppingCartContext"
import CartItem from "./CartItem";
import formatCurrency from "../utilities/formatCurrency";

import storeItems from '../data/items.json'

type ShoppingCartProps = {
    isOpen: boolean
}

function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCartContext();
    return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}> 
                {cartItems.map(item => {
                    return <CartItem key={item.id} {...item} />
                })}
                <div className="ms-auto fw-bold fs-5">
                Total: {formatCurrency(cartItems.reduce((acc, cItem) => {
                    const item = storeItems.find(i => i.id === cItem.id)
                    return acc + (item?.price || 0) * cItem.quantity
                }, 0))}
            </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
};

export default ShoppingCart