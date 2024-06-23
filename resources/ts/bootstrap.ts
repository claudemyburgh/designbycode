//@ts-expect-error
import.meta.glob(["../img/**/*"])
import axios, { AxiosInstance } from 'axios';
import "vanilla-headless"
import ThemeManager from "@designbycode/theme-manager";
// import "./lib/dark-mode"

const themeManager = new ThemeManager(['grayscale'])
themeManager.initButtons()

declare global {
    interface Window {
        axios: AxiosInstance;
    }

}

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
