import '../style.css';
import { petsJSON } from '../../data/pets';
import * as Pagination from './components/showcase/showcase';
import * as Counter from './components/counter/counter';
import { createElement } from '../../utils/create-element';

const CssClasses = {
    CONTAINER: 'pagination',
};

const showcaseElement = Pagination.createComponent(petsJSON);
const counterComponent = Counter.createComponent(Pagination.PAGES_COUNT, Pagination.showPage);
const paginationComponent = createElement({
    tagName: 'section',
    className: CssClasses.CONTAINER,
});

paginationComponent.append(showcaseElement, counterComponent);
document.body.append(paginationComponent);
