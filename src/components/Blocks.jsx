import '../styles/Blocks.css';

function Blocks()
{
    return(
        <>
        <div className="blocks " >
        {/* Delivery Block */}
        
        <div class="card">
        <div Class="tag">
        <b>Delivery Address</b>
        <i class="small material-icons mid">chevron_right</i>
        </div>
        <div class="gray middle">
        <p class="tag">Please Choose Destination Address</p>
        </div>
        </div>

        {/*Dropship Block */}
        <div class="card ">
        <div class="Drop">
        Drop pin 
        <div class="switch">
        <label>
        <input type="checkbox"/>
        <span class="lever"></span>
        </label>
        </div>
        </div>
        </div>

         {/* Delivery Block */}
        
         <div class="card">
        <div Class="tag">
        <b>Shipping Option</b>
        <i class="small material-icons mid">chevron_right</i>
        </div>
        <div class="gray middle">
        <p class="tag">Please Choose your shipping Address</p>
        </div>
        </div>

        {/* Delivery Block */}
    
         <div class="card">
        <div Class="tag">
        <b>Payment Option</b>
        <i class="small material-icons mid">chevron_right</i>
        </div>
        <div class="gray middle">
        <p class="tag">Please Choose Payment Option</p>
        </div>
        </div>

        </div>
        </>
    )
}

export default Blocks;