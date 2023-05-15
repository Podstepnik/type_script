/**
 * Celem tego przykładu jest zrozumienie, że:
 *
 * - mając już istniejący projekt napisane w JavaScript
 * - używając ❣edytora kodu opartego o IntelliJ (np. WebStorm) lub VSC
 * - mając zainstalowanego (najlepiej globalnie) typescript
 * - doinstalowując bibliotekę z plikami definicji: *.d.ts
 *
 *   !!! dostajemy podpowiadanie składni 🤯 !!!
 *
 * Tutaj biblioteką JS jest 'jquery'
 * Biblioteką z typami jest '@types/jquery'
 *
 * [npm install jquery]
 * [npm install --save-dev @types/jquery]
 *
 * PS: Nie zawsze biblioteka @types/... jest konieczna, ponieważ
 * część projektów na npm, jest już napisana w typescript i posiada pliki *.d.ts
 * */
import './style.css'
import $ from 'jquery';
import { myWebsite } from './views/my-website'

const pageTitle = $(`<h1>jQuery in 2022?</h1>`);
const mainObject = $(`<main>...</main>`);

mainObject.append(myWebsite);

$(document.body).append(
	pageTitle,
	mainObject
)

