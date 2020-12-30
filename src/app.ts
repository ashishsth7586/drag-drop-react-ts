class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLElement;
    constructor() {
        // adding ! makes sure that the element with id exists
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLElement;
    }
}