const addTimerHOC = C => class ModTimer extends C {
  static displayName = 'addTimerHOC';

  timmers;
  unmount = false;

  componentWillMount() {
    this.timmers = [];
    super.componentWillMount();
  }
  setTimeout = (...arg: any) => {
    let timmer;
    if (this.timmers && !this.unmount) {
      timmer = setTimeout(...arg);
      this.timmers.push(timmer);
    }
    return timmer;
  }
  clearTimeout = () => {
    if (this.timmers) {
      // this.timmers.forEach(a => clearTimeout(a));
      while (this.timmers.length) {
        clearTimeout(this.timmers.pop());
      }
    }
  }
  componentWillUnmount() {
    try {
      super.componentWillUnmount();
    } catch (e) {
      // Why super is null?
    } finally {
      this.unmount = true;
      this.clearTimeout();
      this.timmers = undefined;
    }
  }
};

export default addTimerHOC;
