import React from 'react';
import {FieldChangeData, LCGUI} from "../../../json-schema/LCGUI";
import {Control} from "../../../json-schema/SchemaTypes";
import {BaseTextController} from "./BaseTextController";
import {ConfigType} from "../../../designer/right/ConfigContent";

export const BaseTextStyleConfig: React.FC<ConfigType<BaseTextController>> = ({controller}) => {

    const {data, style} = controller.getConfig()!;

    const onFieldChange = (fieldChangeData: FieldChangeData) => {
        const {dataFragment} = fieldChangeData;
        controller.update(dataFragment!);
    }

    const schema: Control = {
        type: 'grid',
        config: {columns: 2},
        children: [
            {
                key: 'style',
                children: [
                    {
                        key: 'fontSize',
                        type: 'input',
                        label: '字号',
                        value: style?.fontSize,
                        config: {
                            type: 'number',
                            min: 1,
                        }
                    },
                    {
                        key: 'fontWeight',
                        type: 'input',
                        label: '加粗',
                        value: style?.fontWeight || 400,
                        config: {
                            type: 'number',
                            min: 100,
                            max: 900,
                            step: 100
                        }
                    },
                    {
                        key: 'color',
                        type: 'color-picker',
                        label: '颜色',
                        value: '#1c1c1c',
                        config: {
                            width: '100%',
                            radius: 3,
                            showBorder: true,
                            showText: true,
                            height: 16,
                            hideControls: true
                        }
                    },
                    {
                        key: 'fontFamily',
                        type: 'select',
                        label: '字体',
                        value: '',
                        config: {
                            options: [
                                {label: '钉钉进步体', value: 'DingTalk JinBuTi'},
                                {label: '点点像素体', value: 'DottedSongtiCircleRegular'},
                                {label: '抖音美好体', value: 'DouyinSansBold'},
                                {label: '优设标题黑', value: '优设标题黑'},
                                {label: '字体传奇南安体', value: '字体传奇南安体-免费商用'},
                                {label: '庞门正道标题', value: '庞门正道标题体免费版'},
                                {label: '站酷文艺体', value: '站酷文艺体'},
                                {label: 'LHTFONT', value: 'LHTFONT'},
                            ],
                        }
                    }
                ]
            },
            {
                key: 'data',
                children: [
                    {
                        key: 'staticData',
                        children: [
                            {
                                key: 'data',
                                type: 'text-area',
                                label: '内容',
                                value: data?.staticData?.data,
                                config: {
                                    gridColumn: '1/3',
                                }
                            },
                        ]
                    }
                ]
            }
        ]
    }

    return (
        <LCGUI schema={schema} onFieldChange={onFieldChange}/>
    )
}
