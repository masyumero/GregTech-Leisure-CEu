ForgeEvents.onEvent("net.minecraftforge.event.entity.player.ItemTooltipEvent", event => {
    if (!LDLib.isClient()) return
    function addfull_colortooltip(text) {
        event.getToolTip().add(Component.literal(TextUtil.full_color(text)))
    }
    function adddark_purplish_redtooltip(text) {
        event.getToolTip().add(Component.literal(TextUtil.dark_purplish_red(text)))
    }
    function addwhite_bluetooltip(text) {
        event.getToolTip().add(Component.literal(TextUtil.white_blue(text)))
    }
    function addpurplish_redtooltip(text) {
        event.getToolTip().add(Component.literal(TextUtil.purplish_red(text)))
    }
    function addgoldentooltip(text) {
        event.getToolTip().add(Component.literal(TextUtil.golden(text)))
    }
    function adddark_greentooltip(text) {
        event.getToolTip().add(Component.literal(TextUtil.dark_green(text)))
    }
    function addtooltip(text) {
        event.getToolTip().add(Component.literal("§7" + text))
    }
    function unknown() {
        addtooltip("普通の装置では使用できません")
        event.getToolTip().add(Component.literal("§2グレード-").append(Component.literal(TextUtil.white_blue("未知"))))
    }
    const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"]
    tiers.forEach((suprachronal) => {
        if (event.getItemStack().getId() == "kubejs:suprachronal_" + suprachronal) {
            addtooltip("既知の時空を超えて動作する")
            addwhite_bluetooltip(suprachronal.toUpperCase() + "級回路")
        }
    })
    tiers.slice(0, 12).forEach((magneto_resonatic) => {
        if (event.getItemStack().getId() == "kubejs:circuit_resonatic_" + magneto_resonatic) {
            addtooltip("§d" + magneto_resonatic.toUpperCase() + "級回路")
        }
    })
    switch (event.getItemStack().getId()) {
        case "gtceu:dimensionally_transcendent_dirt_forge":
            addfull_colortooltip("原始人の最初の巨大構造物")
            break
        case "gtceu:door_of_create":
            addwhite_bluetooltip("神への道があなたに開かれる")
            break
        case "kubejs:create_ultimate_battery":
            addtooltip("無からエネルギーを生み出せる")
            unknown()
            break
        case "kubejs:suprachronal_mainframe_complex":
            addtooltip("無から計算力を生み出せる")
            unknown()
            break
        case "kubejs:supracausal_mainframe":
            addtooltip("万物を統べる者、原初の奇跡")
            addfull_colortooltip("MAX級回路")
            break
        case "kubejs:supracausal_computer":
            addtooltip("時を超越する影")
            addfull_colortooltip("OpV級回路")
            break
        case "kubejs:supracausal_assembly":
            addtooltip("真理の門の前に立ちはだかる壮大な壁")
            addfull_colortooltip("UXV級回路")
            break
        case "kubejs:supracausal_processor":
            addtooltip("宇宙の法則がここに現れる")
            addfull_colortooltip("UIV級回路")
            break
        case "kubejs:cosmic_assembly":
            addtooltip("手のひらで微細な回転を感じる")
            adddark_purplish_redtooltip("UIV級回路")
            break
        case "kubejs:cosmic_computer":
            addtooltip("密度が特異点に近づく小さなもの")
            adddark_purplish_redtooltip("UXV級回路")
            break
        case "kubejs:cosmic_mainframe":
            addtooltip("すべてをシミュレートし、すべてを分析し、すべてを理解する")
            adddark_purplish_redtooltip("OpV級回路")
            break
        case "kubejs:cosmic_processor":
            addtooltip("星々を手にする")
            adddark_purplish_redtooltip("UEV級回路")
            break
        case "kubejs:exotic_assembly":
            addtooltip("量子ランダムウォーク")
            addpurplish_redtooltip("UEV級回路")
            break
        case "kubejs:exotic_computer":
            addtooltip("スピンですべてを制御する")
            addpurplish_redtooltip("UIV級回路")
            break
        case "kubejs:exotic_mainframe":
            addtooltip("未来から来た回路")
            addpurplish_redtooltip("UXV級回路")
            break
        case "kubejs:exotic_processor":
            addtooltip("超磁性半導体回路")
            addpurplish_redtooltip("UHV級回路")
            break
        case "kubejs:optical_assembly":
            addtooltip("光子の奔流")
            addgoldentooltip("UHV級回路")
            break
        case "kubejs:optical_computer":
            addtooltip("超大規模計算データサポート")
            addgoldentooltip("UEV級回路")
            break
        case "kubejs:optical_mainframe":
            addtooltip("計算速度が光速に限りなく近づく")
            addgoldentooltip("UIV級回路")
            break
        case "kubejs:optical_processor":
            addtooltip("超高効率の光電子キャリア")
            addgoldentooltip("UV級回路")
            break
        case "kubejs:bioware_assembly":
            addtooltip("ささやき声が聞こえる気がする")
            adddark_greentooltip("UV級回路")
            break
        case "kubejs:bioware_computer":
            addtooltip("金属の間に粘菌が広がっている")
            adddark_greentooltip("UHV級回路")
            break
        case "kubejs:bioware_mainframe":
            addtooltip("菌類意識ネットワーク")
            adddark_greentooltip("UEV級回路")
            break
        case "kubejs:bioware_processor":
            addtooltip("粘性の有機スラリーが表面に付着している")
            adddark_greentooltip("ZPM級回路")
    }
})