import React from 'react'
import { Link, Outlet } from 'react-router-dom';
function OrderLayout() {
    return (
        <div>
      
            <nav>
                <ul>
                    <li>
                        <Link to="Sellerorder">Child 1</Link>
                    </li>
                    <li>
                        <Link to="Drinks">Child 2</Link>
                    </li>
                    <li>
                        <Link to="Food">Child 3</Link>
                    </li>
                    <li>
                        <Link to="Merchandise">Child 4</Link>
                    </li>
                    <li>
                        <Link to="Coffee">Child 4</Link>
                    </li>
                  

                </ul>
            </nav>
            {/* Nested child routes will be rendered here */}
            <Outlet />

        </div>
    )
}

export default OrderLayout
