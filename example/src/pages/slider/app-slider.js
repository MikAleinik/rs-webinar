import '../style.css';
import { petsJSON } from '../../data/pets';
import * as Slider from './components/slider';

const sliderComponent = Slider.createComponent(petsJSON);
document.body.append(sliderComponent);
