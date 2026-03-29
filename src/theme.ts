import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                violet: {
                    950: { value: "#1a1025" },
                    900: { value: "#2d1f3d" },
                    800: { value: "#120b1c" },
                    700: { value: "#3d2060" },
                },
                purple: {
                    400: { value: "#c084fc" },
                    300: { value: "#a78bfa" },
                    200: { value: "#f0abfc" },
                    100: { value: "#f5d0fe" },
                },
                green: {
                    300: { value: "#86efac" },
                },
                pink: {
                    300: { value: "#fda4af" },
                },
                yellow: {
                    200: { value: "#fde68a" },
                },
            },
        },
        semanticTokens: {
            colors: {
                bg: {
                    DEFAULT: { value: "{colors.violet.950}" },
                },
                terminal: {
                    surface: { value: "{colors.violet.900}" },
                    titlebar: { value: "{colors.violet.800}" },
                    border: { value: "{colors.purple.400}" },
                    borderSub: { value: "{colors.violet.700}" },
                    text: { value: "{colors.purple.100}" },
                    prompt: { value: "{colors.purple.200}" },
                    accent: { value: "{colors.purple.300}" },
                    cursor: { value: "{colors.purple.200}" },
                    success: { value: "{colors.green.300}" },
                    error: { value: "{colors.pink.300}" },
                },
                dot: {
                    close: { value: "{colors.pink.300}" },
                    minimize: { value: "{colors.yellow.200}" },
                    maximize: { value: "{colors.green.300}" },
                }
            },
        },
    },
})

export default createSystem(defaultConfig, config)