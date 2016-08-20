export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['','my-places'],  name: 'my-places', moduleId: 'my-places', nav: true, title: 'My Places' },
      { route: ['','my-technologies'],  name: 'my-technologies', moduleId: 'my-technologies', nav: true, title: 'My Techs' }
    ]);

    this.router = router;
  }
}
