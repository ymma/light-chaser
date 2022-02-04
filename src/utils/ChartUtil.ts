import {initAntdBaseBar, initAntdGroupBar, initAntdPercentBar, initAntdZoneBar} from '../init/data/antd-bar';

/**
 * 根据类型，获取图表初始化数据
 * @param type
 */
export function getChartInitData(type: string) {
    switch (type) {
        case "AntdBaseBar":
            return initAntdBaseBar();
        case "AntdGroupBar":
            return initAntdGroupBar();
        case "AntdPercentBar":
            return initAntdPercentBar();
        case "AntdZoneBar":
            return initAntdZoneBar();
        default:
            return null;
    }
}