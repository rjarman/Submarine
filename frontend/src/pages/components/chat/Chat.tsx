import React from 'react';
import { ChatEvent, Service } from '../../libs/typings/Typings';
import './Chat.scss';
import { TextArea } from './TextArea';

export class Chat extends React.Component<{ service: Service }> {
  componentDidMount() {
    new ChatEvent(this.props.service);
  }

  render() {
    return (
      <div className="chat-container">
        <div className="chat-bubbles">
          <div className="chat-bubble chat-bubble__send">
            <div className="chat-bubble__text">Hi</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
            </div>
          </div>
          <div className="chat-bubble chat-bubble__reply">
            <div className="chat-bubble__text">Hello</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
              <div className="chat-bubble__dot"></div>
              <div className="chat-bubble__tag">dummy</div>
            </div>
          </div>
          <div className="chat-bubble chat-bubble__send">
            <div className="chat-bubble__text">Hi</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
            </div>
          </div>
          <div className="chat-bubble chat-bubble__reply">
            <div className="chat-bubble__text">Hello</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
              <div className="chat-bubble__dot"></div>
              <div className="chat-bubble__tag">dummy</div>
            </div>
          </div>
          <div className="chat-bubble chat-bubble__send">
            <div className="chat-bubble__text">Hi</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
            </div>
          </div>
          <div className="chat-bubble chat-bubble__reply">
            <div className="chat-bubble__text">Hello</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
              <div className="chat-bubble__dot"></div>
              <div className="chat-bubble__tag">dummy</div>
            </div>
          </div>
          <div className="chat-bubble chat-bubble__send">
            <div className="chat-bubble__text">Hi</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
            </div>
          </div>
          <div className="chat-bubble chat-bubble__reply">
            <div className="chat-bubble__text">Hello</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
              <div className="chat-bubble__dot"></div>
              <div className="chat-bubble__tag">dummy</div>
            </div>
          </div>
          <div className="chat-bubble chat-bubble__send">
            <div className="chat-bubble__text">
              Fusce gravida finibus efficitur. Vivamus aliquam dolor est. Donec
              feugiat imperdiet mauris in vestibulum. Nullam vel lorem in est
              imperdiet sollicitudin. Quisque pulvinar lacus in diam gravida
              cursus. Pellentesque sit amet ex eros. Maecenas eget faucibus
              eros. Nunc tempus posuere justo, vitae interdum erat ullamcorper
              ac. In a tellus ac risus laoreet molestie ac sed neque.
            </div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
            </div>
          </div>
          <div className="chat-bubble chat-bubble__reply">
            <div className="chat-bubble__text">Hello</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
              <div className="chat-bubble__dot"></div>
              <div className="chat-bubble__tag">dummy</div>
            </div>
          </div>
          <div className="chat-bubble chat-bubble__send">
            <div className="chat-bubble__text">Hi</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
            </div>
          </div>
          <div className="chat-bubble chat-bubble__reply">
            <div className="chat-bubble__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tempor, orci eget imperdiet congue, augue orci molestie tortor, in
              venenatis ex dolor eu sem. Pellentesque suscipit sem pretium risus
              suscipit interdum. Cras eget lacinia justo. Duis aliquam lacus
              quis tortor rhoncus imperdiet. Aliquam erat volutpat. Cras a odio
              convallis, pulvinar dui sit amet, sollicitudin arcu. Nulla aliquam
              dolor sed ipsum fermentum, quis hendrerit odio ullamcorper. In
              neque elit, sollicitudin elementum velit vitae, lobortis congue
              lorem. Praesent semper nibh sit amet eleifend ullamcorper. Etiam
              posuere et mauris et condimentum. Donec a ultricies quam. Vivamus
              pulvinar ex nisl, tincidunt sagittis nulla hendrerit sed. Aenean
              non sodales magna, sed venenatis mauris. Aenean mattis, risus
              lacinia eleifend venenatis, nibh velit mattis diam, at tincidunt
              mauris est vel mi. Aliquam est sem, scelerisque eu tellus et,
              cursus porttitor mauris. Etiam fermentum non lacus in tempus.
              Pellentesque at tincidunt nisi. Integer magna tellus, rhoncus
              molestie eros vel, tempor dignissim tellus. Nam faucibus nibh a
              elit aliquet dignissim. Aliquam non risus viverra orci vulputate
              interdum a sit amet eros. Quisque lacinia interdum elit, sit amet
              malesuada libero scelerisque et. Suspendisse faucibus, ante vel
              vestibulum lacinia, nulla lectus varius arcu, ac tempus arcu magna
              sit amet massa. Phasellus dapibus ex sed accumsan volutpat. In
              interdum et libero id blandit. Etiam suscipit massa et elit
              blandit, ut varius odio placerat. Aliquam fringilla, arcu
              condimentum semper tristique, nisi nisi fringilla nibh, et
              ullamcorper nulla enim et ligula. Nulla ac lacus cursus, venenatis
              magna a, rutrum quam. Curabitur tempus mattis est, in sodales
              lorem vulputate at. Vestibulum tempus, arcu in pellentesque
              finibus, arcu eros congue eros, vulputate iaculis lorem mi et
              nunc. Phasellus id tellus pellentesque, congue augue non,
              tristique urna. Praesent sed ligula finibus, tempus mauris non,
              mattis justo. Nulla lacus neque, ultrices sed felis ut, blandit
              porttitor nisl. Fusce laoreet vehicula risus, sed dictum turpis.
              Aenean sollicitudin interdum volutpat. Donec sed mauris at orci
              venenatis sagittis in vel risus. Praesent iaculis neque id
              fermentum bibendum. Nunc a massa quis quam consequat tincidunt
              faucibus ac leo. Praesent luctus, massa vitae interdum euismod,
              lectus neque rhoncus nisi, eget ornare felis ex nec neque.
              Phasellus nec rutrum ante. Sed varius sem sit amet pellentesque
              aliquet. Quisque malesuada neque nec iaculis aliquet. Fusce
              gravida finibus efficitur. Vivamus aliquam dolor est. Donec
              feugiat imperdiet mauris in vestibulum. Nullam vel lorem in est
              imperdiet sollicitudin. Quisque pulvinar lacus in diam gravida
              cursus. Pellentesque sit amet ex eros. Maecenas eget faucibus
              eros. Nunc tempus posuere justo, vitae interdum erat ullamcorper
              ac. In a tellus ac risus laoreet molestie ac sed neque.
            </div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
              <div className="chat-bubble__dot"></div>
              <div className="chat-bubble__tag">dummy</div>
            </div>
          </div>
          <div className="chat-bubble chat-bubble__send">
            <div className="chat-bubble__text">Hi</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
            </div>
          </div>
          <div className="chat-bubble chat-bubble__reply">
            <div className="chat-bubble__text">Hello</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
              <div className="chat-bubble__dot"></div>
              <div className="chat-bubble__tag">dummy</div>
            </div>
          </div>
          <div className="chat-bubble chat-bubble__send">
            <div className="chat-bubble__text">Hi</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
            </div>
          </div>
          <div className="chat-bubble chat-bubble__reply">
            <div className="chat-bubble__text">Hello</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
              <div className="chat-bubble__dot"></div>
              <div className="chat-bubble__tag">dummy</div>
            </div>
          </div>
          <div className="chat-bubble chat-bubble__send">
            <div className="chat-bubble__text">Hi</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
            </div>
          </div>
          <div className="chat-bubble chat-bubble__reply">
            <div className="chat-bubble__text">Hello</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
              <div className="chat-bubble__dot"></div>
              <div className="chat-bubble__tag">dummy</div>
            </div>
          </div>
          <div className="chat-bubble chat-bubble__send">
            <div className="chat-bubble__text">Hi</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
            </div>
          </div>
          <div className="chat-bubble chat-bubble__reply">
            <div className="chat-bubble__text">Hello</div>
            <div className="chat-bubble__time">
              {'at ' + this.props.service.getDatetime(Date.now())[0]}
              <div className="chat-bubble__dot"></div>
              <div className="chat-bubble__tag">dummy</div>
            </div>
          </div>
        </div>
        <div className="chat-reply__dot-container">
          <div className="chat-reply__dot"></div>
          <div className="chat-reply__dot"></div>
          <div className="chat-reply__dot"></div>
        </div>
        <TextArea />
        <div className="scroll-to-last"></div>
      </div>
    );
  }
}
