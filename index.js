import { isMobile } from 'mobile-device-detect';
import mobileTesting from "./Testing/mobileTesting";
import webTesting from "./Testing/webTesting";

if (isMobile){
    {mobileTesting}
} else {
    {webTesting}
}

