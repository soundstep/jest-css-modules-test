import styles from './one-style.css';
console.log('styles from src', styles);
import stylesFromModules from '@my-org/my-module/styles.css'; //>>>>>>>>> failing on that line because it is in the "node_modules" folder
console.log('styles from node modules', stylesFromModules);

class MyClass {
    say(name) {
        return `Hi ${name}`;
    }
}

export default MyClass;
