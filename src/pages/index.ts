import { HomePage } from '../pages/home/home';
import { BasicElementsPage } from '../pages/basic-elements/basic-elements';
import { BasicShapesPage } from '../pages/basic-shapes/basic-shapes';
import { PathsSvgPage } from '../pages/paths-svg/paths-svg';
import { DynamicSvgCoordPage } from '../pages/dynamic-svg-coord/dynamic-svg-coord';
import { ScalesPage } from '../pages/scales/scales';
import { GroupElementPage } from './group-element/group-element';
import { GroupElementD3Page } from './group-element-d3/group-element-d3';
import { TextElementPage } from './text-element/text-element';
import { AxesPage } from './axes/axes';
import { MenuOptionModel } from '../components/side-menu-content/models/menu-option-model';
import { OverviewPage } from '../pages/overview/overview';
import { SampleVideoPage } from '../pages/sample-video/sample-video';
import { tickIncrement } from 'd3';
import { Title } from '@angular/platform-browser';
import { AngularComponentsPage } from '../pages/angular-components/angular-components';
import { TamplatesPage } from '../pages/tamplates/tamplates';
import { NestedComponentsPage } from '../pages/nested-components/nested-components';
import { StylingPage } from '../pages/styling/styling';
import { InterpolationPage } from '../pages/interpolation/interpolation';
import { PropertyBindingPage } from '../pages/property-binding/property-binding';
import { AttributeVsDomPage } from '../pages/attribute-vs-dom/attribute-vs-dom';
import { AttributeBindingPage } from '../pages/attribute-binding/attribute-binding';
import { ClassBindingPage } from '../pages/class-binding/class-binding';
import { StyleBindingPage } from '../pages/style-binding/style-binding';
import { EventBindingPage } from '../pages/event-binding/event-binding';
import { TwoWayDataBindingPage } from '../pages/two-way-data-binding/two-way-data-binding';
import { NgForDirectivePage} from '../pages/ng-for-directive/ng-for-directive';
import { NgForTrackbyPage } from '../pages/ng-for-trackby/ng-for-trackby';
import { PipesPage } from '../pages/pipes/pipes';
import { CustomPipesPage } from '../pages/custom-pipes/custom-pipes';
import { ContainerNestedComponentsPage } from '../pages/container-nested-components/container-nested-components';
import { ComponentInputPropertyPage } from '../pages/component-input-property/component-input-property';
import { OutputPropertiesPage } from '../pages/output-properties/output-properties';
import { InterfacesPage } from '../pages/interfaces/interfaces';
import { LifecycleHookPage } from '../pages/lifecycle-hook/lifecycle-hook';
export const PagesList = [
    { component: HomePage,              title: 'Home' },
    { component: OverviewPage,          title: 'OverView Of course'},
    { component: SampleVideoPage,       title: 'Introduction Of Angular 2'},
    { component: AngularComponentsPage, title: 'Angular Components'},
    { component: TamplatesPage,         title: 'Template'},
    { component: NestedComponentsPage,  title: 'Nested Component'},
    { component: StylingPage,           title: 'Styling in Angular'},
    { component: InterpolationPage,     title: 'Interpolation'},
    { component: PropertyBindingPage,   title: 'Property Binding'},
    { component: AttributeVsDomPage,    title: 'Attribute Vs DOM'},
    { component: AttributeBindingPage,  title: 'Attribute Binding'},
    { component: ClassBindingPage,      title: 'Class Binding'},
    { component: StyleBindingPage,      title: 'Style Binding'},
    { component: EventBindingPage,      title: 'Event Binding'},
    { component: TwoWayDataBindingPage, title: 'Two way data binding'},
    { component: NgForDirectivePage,    title: 'ngFor Directives'},
    { component: NgForTrackbyPage,      title: 'ngFor Tract by'},
    { component: PipesPage,             title: 'Pipes'},
    { component: CustomPipesPage,       title: 'Custom Pipes'},
    { component: ContainerNestedComponentsPage, title: 'Container and Nested Component'},
    { component: ComponentInputPropertyPage, title: 'Component Input Property'},
    { component: OutputPropertiesPage,  title: 'Output Properties'},
    { component: InterfacesPage,        title: 'Interfaces'},
    { component: LifecycleHookPage,     title: 'Lifecycle Hooks'},
    // add new here
    { component: BasicElementsPage,     title: 'Basic SVG Elements' },
    { component: BasicShapesPage,       title: 'Basic Shapes' },
    { component: PathsSvgPage,          title: 'SVG Paths' },
    { component: DynamicSvgCoordPage,   title: 'Dynamic coordinate space' },
    { component: ScalesPage,            title: 'Scales' },
    { component: GroupElementPage,      title: 'Group Element (SVG Part.)' },
    { component: GroupElementD3Page,    title: 'Group Element (D3 Part.)' },
    { component: TextElementPage,       title: 'SVG Text Element' },
    { component: AxesPage,              title: 'D3.js Axes' },
];

export const Menu: MenuOptionModel[] = [
    {
        displayName: 'Home',
        iconName: 'home',
        component: HomePage,
        selected: true
    }, {
        displayName: 'Beginners',
        subItems: [{
            displayName: 'Overview',
            component: OverviewPage,
        },
        {
            displayName : 'Introduction of Angular 2',
            component : SampleVideoPage,
        },
        {
            displayName : 'Components',
            component : AngularComponentsPage,
        },
        {
            displayName : 'Template',
            component : TamplatesPage,
        },
        {
            displayName: 'Nested Components',
            component : NestedComponentsPage,
        },
        {
            displayName : 'Styling Angular 2 Components',
            component : StylingPage,
        },
        {
            displayName : 'Interpolation',
            component : InterpolationPage,
        },
        {
            displayName : 'Property Binding',
            component : PropertyBindingPage,
        },
        {
            displayName : 'Attribute vs DOM',
            component : AttributeVsDomPage,
        },
        {
            displayName : 'Attribute Binding',
            component : AttributeBindingPage,
        },
        {
            displayName : 'Class Binding',
            component : ClassBindingPage,
        },
        {
            displayName : 'Style Binding',
            component : StyleBindingPage,
        },
        {
            displayName : 'Event Binding',
            component : EventBindingPage,
        },
        {
            displayName : 'Two way data binding',
            component : TwoWayDataBindingPage,
        },
        {
            displayName : 'ngFor Directives',
            component : NgForDirectivePage,
        },
        {
            displayName : 'ngFor trackby',
            component : NgForTrackbyPage,
        },
        {
            displayName: 'Pipes',
            component : PipesPage,  
        },
        {
            displayName: 'Custom Pipes',
            component : CustomPipesPage,
        },
        {
            displayName: 'Container & Nested Component',
            component : ContainerNestedComponentsPage,
        },
        {
            displayName : 'Component Input Property',
            component : ComponentInputPropertyPage,
        },
        {
            displayName : 'Output Properties',
            component : OutputPropertiesPage,
        },
        {
            displayName : 'Interfaces',
            component : InterfacesPage,
        },
        {
            displayName : 'Lifecycle Hooks',
            component : LifecycleHookPage,
        },
        // here add new one
        {
            displayName: 'Basic SVG Elements',
            component: BasicElementsPage,
        }, {
            displayName: 'Basic Shapes',
            component: BasicShapesPage,
        }, {
            displayName: 'SVG Paths',
            component: PathsSvgPage
        }, {
            displayName: 'Dynamic coordinate space',
            component: DynamicSvgCoordPage,
        }, {
            displayName: 'Scales',
            component: ScalesPage,
        }, {
            displayName: 'Group Element (SVG Part.)',
            component: GroupElementPage
        }, {
            displayName: 'Group Element (D3 Part.)',
            component: GroupElementD3Page,
        }, {
            displayName: 'SVG Text Element',
            component: TextElementPage,
        }, {
            displayName: 'D3.js Axes',
            component: AxesPage
        }]
    }
];

export const Pages = PagesList.map((page) => {
    return page.component;
});

export const RootPage = HomePage;
