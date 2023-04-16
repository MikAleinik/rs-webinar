import '../style.css';
import { petsJSON } from '../../pets/pets';
import * as Pagination from './components/showcase/showcase';

const paginationComponent = Pagination.createComponent(petsJSON);
document.body.append(paginationComponent);