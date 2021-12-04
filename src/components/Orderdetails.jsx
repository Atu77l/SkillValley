import '../styles/orderdetail.css';
import itemimg from '../order_img.png';

function OrderDetail()
{
    return(
        <>
        <div className="blocks">
        
        {/* card1 */}

        <div class="card">
        <p className="tag"><b>Order Detail</b></p>
        <div class="order-item tag">
            <div class="item-image"> <img src={itemimg} alt="card1"></img></div>
            <div>
                <p>ORIGINAL BOAT EARPHONE BASS HEADS</p>
                <span className="gray-back">&nbsp;&nbsp;Variant:RED, 40&nbsp;&nbsp;</span><br/>
                <span><span className="gray">1PCS(1.100gr) @</span><span className="t-red">Rp. 100.1000</span></span>
            </div>
        </div>
        <input className="center" placeholder="Optional message here"></input>
        </div>

        {/* card2 */}

        <div class="card">
        <p className="tag"><b>Order Detail</b></p>
        <div class="order-item tag">
            <div class="item-image"> <img src={itemimg} alt="card2"></img></div>
            <div>
                <p>ORIGINAL BOAT EARPHONE BASS HEADS</p>
                <span className="gray-back">&nbsp;&nbsp;Variant:RED, 40&nbsp;&nbsp;</span><br/>
                <span><span className="gray">1PCS(1.100gr) @</span><span className="t-red">Rp. 100.1000</span></span>
            </div>
        </div>
        <input className="center" placeholder="Optional message here"></input>
        </div>

        {/* Voucher */}

        <div class="card" >
        <div className="row total-details">
        <div className="total-details"><i class="small material-icons ">shopping_cart</i>
        &nbsp;&nbsp;&nbsp;
        Voucher Code
        </div>
        Apply
        </div>
        </div>

        {/* Total Details  */}

        <div class="card total-details">
        <div>Total items<br/>
        Total Weight<br/>
        Total Order<br/>
        Voucher<br/>
        Shipping Cost<br/>
        Grand Total<br/>
        </div>
        <div>
            2 Item<br/>
            2.2000 Gram<br/>
            Rp.     360.000<br/>
            Rp.     0<br/>
            Rp.     0<br/>
            <span class="t-red">Rp.     360.000</span><br/>

        </div>
        </div>

        <p>
        With Payment, I agree with terms & condition
        </p>

        {/* Finish */}

        <div className="row pink-color center-align Order">
        <p>
            Finish
        </p>
        
        </div>

        </div>
        </>
    );
}

export default OrderDetail;