import styles from './one-style.css';
import stylesFromModules from '@my-org/my-module/styles.css';
console.log('styles from src', styles);
console.log('styles from node modules', stylesFromModules);

class MyClass {
    say(name) {
        return `Hi ${name}`;
    }
}

export default MyClass;
