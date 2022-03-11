import { fromEvent, tap } from 'rxjs';
import { map } from 'rxjs/operators';


const texto = document.createElement('div');

texto.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend quam vel vestibulum molestie. Cras tempor aliquet felis ac rutrum. Donec vel tincidunt eros. Aliquam posuere ligula et odio euismod volutpat. Nulla ac dapibus nulla. Donec ultricies tristique ante, sed tempor ligula vulputate id. Praesent imperdiet, massa nec consequat mollis, eros urna facilisis diam, ac sagittis libero metus finibus est. In imperdiet lobortis tristique. Donec ut augue erat. Fusce bibendum dapibus mauris, quis vulputate odio dapibus sit amet. Ut euismod auctor lectus ac dapibus.
<br><br/>>
Etiam pulvinar imperdiet odio, vel viverra nisl dapibus ac. Mauris odio elit, maximus tristique tortor ac, porttitor tincidunt tellus. In vel sapien suscipit, rhoncus odio at, tristique elit. In efficitur ipsum non molestie mattis. Donec non metus suscipit, vulputate dui eget, lacinia leo. Nunc sit amet viverra urna, sit amet ullamcorper turpis. Cras a quam ac erat ultrices aliquet. Fusce laoreet nunc maximus neque hendrerit ultricies. Aenean et sem feugiat, fermentum sapien ut, imperdiet ligula. Nam vestibulum aliquet enim, vel aliquam erat vestibulum a. Donec dignissim ipsum ac orci imperdiet congue. In vel imperdiet lectus. Duis posuere odio aliquam blandit auctor. Quisque elementum dui id elit malesuada fringilla.
<br><br/>
Donec sit amet luctus mauris. Phasellus hendrerit leo enim, sit amet interdum felis faucibus et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vulputate varius est, id tempus sem. Sed a tristique eros. Duis nec est justo. Quisque nisi metus, malesuada sed congue non, imperdiet et orci. Nunc non nisl et purus pretium laoreet. Donec vehicula nisi non orci aliquet sollicitudin.
<br><br/>
Vivamus congue consequat porta. Nunc sit amet malesuada ipsum. Curabitur consequat vulputate orci, vitae dignissim erat ultricies vel. Aenean et aliquet orci. Vestibulum egestas quis nulla at dignissim. Donec eros risus, sollicitudin et tristique non, congue vel libero. Suspendisse euismod, elit sed tempor laoreet, dui diam hendrerit nunc, feugiat sollicitudin orci quam at nunc. Cras erat orci, interdum in vehicula non, varius vel mauris. Pellentesque et porttitor tortor. Vivamus sed lorem eu ex ornare euismod. Quisque lacinia imperdiet diam sed viverra. Aenean ullamcorper ultrices metus sed ultricies. Morbi diam arcu, efficitur nec imperdiet sit amet, bibendum in tortor. Donec malesuada, augue et interdum congue, neque sem pellentesque magna, non facilisis elit nisl nec elit. Suspendisse a sem id elit tempus efficitur.
<br><br/>
Nulla in est hendrerit, dictum enim eget, suscipit est. Ut feugiat metus sit amet faucibus porta. Vestibulum congue quis libero at consectetur. Nam in eros sagittis, condimentum purus vel, ullamcorper sem. Aenean dignissim arcu et lectus interdum, in faucibus mi porta. Vivamus sed velit luctus, laoreet dui rutrum, porta diam. Proin efficitur est ac rutrum dapibus.
<br><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend quam vel vestibulum molestie. Cras tempor aliquet felis ac rutrum. Donec vel tincidunt eros. Aliquam posuere ligula et odio euismod volutpat. Nulla ac dapibus nulla. Donec ultricies tristique ante, sed tempor ligula vulputate id. Praesent imperdiet, massa nec consequat mollis, eros urna facilisis diam, ac sagittis libero metus finibus est. In imperdiet lobortis tristique. Donec ut augue erat. Fusce bibendum dapibus mauris, quis vulputate odio dapibus sit amet. Ut euismod auctor lectus ac dapibus.
<br><br/>>
Etiam pulvinar imperdiet odio, vel viverra nisl dapibus ac. Mauris odio elit, maximus tristique tortor ac, porttitor tincidunt tellus. In vel sapien suscipit, rhoncus odio at, tristique elit. In efficitur ipsum non molestie mattis. Donec non metus suscipit, vulputate dui eget, lacinia leo. Nunc sit amet viverra urna, sit amet ullamcorper turpis. Cras a quam ac erat ultrices aliquet. Fusce laoreet nunc maximus neque hendrerit ultricies. Aenean et sem feugiat, fermentum sapien ut, imperdiet ligula. Nam vestibulum aliquet enim, vel aliquam erat vestibulum a. Donec dignissim ipsum ac orci imperdiet congue. In vel imperdiet lectus. Duis posuere odio aliquam blandit auctor. Quisque elementum dui id elit malesuada fringilla.
<br><br/>
Donec sit amet luctus mauris. Phasellus hendrerit leo enim, sit amet interdum felis faucibus et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vulputate varius est, id tempus sem. Sed a tristique eros. Duis nec est justo. Quisque nisi metus, malesuada sed congue non, imperdiet et orci. Nunc non nisl et purus pretium laoreet. Donec vehicula nisi non orci aliquet sollicitudin.
<br><br/>
Vivamus congue consequat porta. Nunc sit amet malesuada ipsum. Curabitur consequat vulputate orci, vitae dignissim erat ultricies vel. Aenean et aliquet orci. Vestibulum egestas quis nulla at dignissim. Donec eros risus, sollicitudin et tristique non, congue vel libero. Suspendisse euismod, elit sed tempor laoreet, dui diam hendrerit nunc, feugiat sollicitudin orci quam at nunc. Cras erat orci, interdum in vehicula non, varius vel mauris. Pellentesque et porttitor tortor. Vivamus sed lorem eu ex ornare euismod. Quisque lacinia imperdiet diam sed viverra. Aenean ullamcorper ultrices metus sed ultricies. Morbi diam arcu, efficitur nec imperdiet sit amet, bibendum in tortor. Donec malesuada, augue et interdum congue, neque sem pellentesque magna, non facilisis elit nisl nec elit. Suspendisse a sem id elit tempus efficitur.
<br><br/>
Nulla in est hendrerit, dictum enim eget, suscipit est. Ut feugiat metus sit amet faucibus porta. Vestibulum congue quis libero at consectetur. Nam in eros sagittis, condimentum purus vel, ullamcorper sem. Aenean dignissim arcu et lectus interdum, in faucibus mi porta. Vivamus sed velit luctus, laoreet dui rutrum, porta diam. Proin efficitur est ac rutrum dapibus.
Nulla in est hendrerit, dictum enim eget, suscipit est. Ut feugiat metus sit amet faucibus porta. Vestibulum congue quis libero at consectetur. Nam in eros sagittis, condimentum purus vel, ullamcorper sem. Aenean dignissim arcu et lectus interdum, in faucibus mi porta. Vivamus sed velit luctus, laoreet dui rutrum, porta diam. Proin efficitur est ac rutrum dapibus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend quam vel vestibulum molestie. Cras tempor aliquet felis ac rutrum. Donec vel tincidunt eros. Aliquam posuere ligula et odio euismod volutpat. Nulla ac dapibus nulla. Donec ultricies tristique ante, sed tempor ligula vulputate id. Praesent imperdiet, massa nec consequat mollis, eros urna facilisis diam, ac sagittis libero metus finibus est. In imperdiet lobortis tristique. Donec ut augue erat. Fusce bibendum dapibus mauris, quis vulputate odio dapibus sit amet. Ut euismod auctor lectus ac dapibus.
<br><br/>>
Etiam pulvinar imperdiet odio, vel viverra nisl dapibus ac. Mauris odio elit, maximus tristique tortor ac, porttitor tincidunt tellus. In vel sapien suscipit, rhoncus odio at, tristique elit. In efficitur ipsum non molestie mattis. Donec non metus suscipit, vulputate dui eget, lacinia leo. Nunc sit amet viverra urna, sit amet ullamcorper turpis. Cras a quam ac erat ultrices aliquet. Fusce laoreet nunc maximus neque hendrerit ultricies. Aenean et sem feugiat, fermentum sapien ut, imperdiet ligula. Nam vestibulum aliquet enim, vel aliquam erat vestibulum a. Donec dignissim ipsum ac orci imperdiet congue. In vel imperdiet lectus. Duis posuere odio aliquam blandit auctor. Quisque elementum dui id elit malesuada fringilla.
<br><br/>
Donec sit amet luctus mauris. Phasellus hendrerit leo enim, sit amet interdum felis faucibus et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vulputate varius est, id tempus sem. Sed a tristique eros. Duis nec est justo. Quisque nisi metus, malesuada sed congue non, imperdiet et orci. Nunc non nisl et purus pretium laoreet. Donec vehicula nisi non orci aliquet sollicitudin.
<br><br/>
Vivamus congue consequat porta. Nunc sit amet malesuada ipsum. Curabitur consequat vulputate orci, vitae dignissim erat ultricies vel. Aenean et aliquet orci. Vestibulum egestas quis nulla at dignissim. Donec eros risus, sollicitudin et tristique non, congue vel libero. Suspendisse euismod, elit sed tempor laoreet, dui diam hendrerit nunc, feugiat sollicitudin orci quam at nunc. Cras erat orci, interdum in vehicula non, varius vel mauris. Pellentesque et porttitor tortor. Vivamus sed lorem eu ex ornare euismod. Quisque lacinia imperdiet diam sed viverra. Aenean ullamcorper ultrices metus sed ultricies. Morbi diam arcu, efficitur nec imperdiet sit amet, bibendum in tortor. Donec malesuada, augue et interdum congue, neque sem pellentesque magna, non facilisis elit nisl nec elit. Suspendisse a sem id elit tempus efficitur.
<br><br/>
Nulla in est hendrerit, dictum enim eget, suscipit est. Ut feugiat metus sit amet faucibus porta. Vestibulum congue quis libero at consectetur. Nam in eros sagittis, condimentum purus vel, ullamcorper sem. Aenean dignissim arcu et lectus interdum, in faucibus mi porta. Vivamus sed velit luctus, laoreet dui rutrum, porta diam. Proin efficitur est ac rutrum dapibus.
<br><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend quam vel vestibulum molestie. Cras tempor aliquet felis ac rutrum. Donec vel tincidunt eros. Aliquam posuere ligula et odio euismod volutpat. Nulla ac dapibus nulla. Donec ultricies tristique ante, sed tempor ligula vulputate id. Praesent imperdiet, massa nec consequat mollis, eros urna facilisis diam, ac sagittis libero metus finibus est. In imperdiet lobortis tristique. Donec ut augue erat. Fusce bibendum dapibus mauris, quis vulputate odio dapibus sit amet. Ut euismod auctor lectus ac dapibus.
<br><br/>>
Etiam pulvinar imperdiet odio, vel viverra nisl dapibus ac. Mauris odio elit, maximus tristique tortor ac, porttitor tincidunt tellus. In vel sapien suscipit, rhoncus odio at, tristique elit. In efficitur ipsum non molestie mattis. Donec non metus suscipit, vulputate dui eget, lacinia leo. Nunc sit amet viverra urna, sit amet ullamcorper turpis. Cras a quam ac erat ultrices aliquet. Fusce laoreet nunc maximus neque hendrerit ultricies. Aenean et sem feugiat, fermentum sapien ut, imperdiet ligula. Nam vestibulum aliquet enim, vel aliquam erat vestibulum a. Donec dignissim ipsum ac orci imperdiet congue. In vel imperdiet lectus. Duis posuere odio aliquam blandit auctor. Quisque elementum dui id elit malesuada fringilla.
<br><br/>
Donec sit amet luctus mauris. Phasellus hendrerit leo enim, sit amet interdum felis faucibus et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vulputate varius est, id tempus sem. Sed a tristique eros. Duis nec est justo. Quisque nisi metus, malesuada sed congue non, imperdiet et orci. Nunc non nisl et purus pretium laoreet. Donec vehicula nisi non orci aliquet sollicitudin.
<br><br/>
Vivamus congue consequat porta. Nunc sit amet malesuada ipsum. Curabitur consequat vulputate orci, vitae dignissim erat ultricies vel. Aenean et aliquet orci. Vestibulum egestas quis nulla at dignissim. Donec eros risus, sollicitudin et tristique non, congue vel libero. Suspendisse euismod, elit sed tempor laoreet, dui diam hendrerit nunc, feugiat sollicitudin orci quam at nunc. Cras erat orci, interdum in vehicula non, varius vel mauris. Pellentesque et porttitor tortor. Vivamus sed lorem eu ex ornare euismod. Quisque lacinia imperdiet diam sed viverra. Aenean ullamcorper ultrices metus sed ultricies. Morbi diam arcu, efficitur nec imperdiet sit amet, bibendum in tortor. Donec malesuada, augue et interdum congue, neque sem pellentesque magna, non facilisis elit nisl nec elit. Suspendisse a sem id elit tempus efficitur.
<br><br/>
Nulla in est hendrerit, dictum enim eget, suscipit est. Ut feugiat metus sit amet faucibus porta. Vestibulum congue quis libero at consectetur. Nam in eros sagittis, condimentum purus vel, ullamcorper sem. Aenean dignissim arcu et lectus interdum, in faucibus mi porta. Vivamus sed velit luctus, laoreet dui rutrum, porta diam. Proin efficitur est ac rutrum dapibus.
Nulla in est hendrerit, dictum enim eget, suscipit est. Ut feugiat metus sit amet faucibus porta. Vestibulum congue quis libero at consectetur. Nam in eros sagittis, condimentum purus vel, ullamcorper sem. Aenean dignissim arcu et lectus interdum, in faucibus mi porta. Vivamus sed velit luctus, laoreet dui rutrum, porta diam. Proin efficitur est ac rutrum dapibus.

`;

const body = document.querySelector('body');

body.append(texto);


const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//funcion que haga el calculo
const calcularPorcentajeScroll = (event) => { 
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};


//Streams
const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log);


const progress$ = scroll$.pipe(
    // map(event => calcularPorcentajeScroll(event)),
    map(calcularPorcentajeScroll),
    tap(console.log),
);


progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});