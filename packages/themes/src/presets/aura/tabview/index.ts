export const root = {
    transitionDuration: '{transition.duration}'
};

export const tabList = {
    background: '{content.background}',
    borderColor: '{content.border.color}'
};

export const tab = {
    borderColor: '{content.border.color}',
    activeBorderColor: '{primary.color}',
    color: '{text.muted.color}',
    hoverColor: '{text.color}',
    activeColor: '{primary.color}'
};

export const tabPanel = {
    background: '{content.background}',
    color: '{content.color}'
};

export const navButton = {
    background: '{content.background}',
    color: '{text.muted.color}',
    hoverColor: '{text.color}'
};

export const colorScheme = {
    light: {
        navButton: {
            shadow: '0px 0px 10px 50px rgba(255, 255, 255, 0.6)'
        }
    },
    dark: {
        navButton: {
            shadow: '0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)'
        }
    }
};

export default {
    root,
    tabList,
    tab,
    tabPanel,
    navButton,
    colorScheme
};
