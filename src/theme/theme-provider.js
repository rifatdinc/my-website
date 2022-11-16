import { useTheme } from './Use-theme';
import DarkTheme from './Darktheme';
import LightTheme from './LightTheme';


export const ThemeProvider = ({children}) => {
    const [darkMode] = useTheme();

    return (
        <>
            {darkMode ? <DarkTheme /> : <LightTheme />}
            {children}
        </>
    );
};