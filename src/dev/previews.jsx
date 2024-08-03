import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Haerriz from "../Ivin";
import OrderConfirmation from "../Pages/OrderConfirmation";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Haerriz">
                <Haerriz/>
            </ComponentPreview>
            <ComponentPreview path="/OrderConfirmation">
                <OrderConfirmation/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews