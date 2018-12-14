import { align2 } from '../utils/helper';
import Component from '../framework/Component';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: `${getCurrentTime()}`
    };
    
    function getCurrentTime() {
      const current = new Date();
      return `
          ${align2(current.getHours())}:${align2(current.getMinutes())}:${align2(current.getSeconds())}
          `;
    }

    this.host = document.createElement('div');
    this.host.classList.add('clock');

    setInterval(() => {
      const time = getCurrentTime();
      this.updateState({ time });
    }, 1000);
  }

  render() {
    const { time } = this.state;

    return `
        <span class="clock__plate">
          <i class="fa fa-clock-o fa-fw label" aria-hidden="true"></i>
          <time datetime="00:00:00" id="clock">${time}</time>
        </span>
    `;
  }
}

export default Clock;
