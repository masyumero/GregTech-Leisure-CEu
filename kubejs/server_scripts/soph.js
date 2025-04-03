// 文件保存为 server_scripts/stack_upgrades.js
ServerEvents.recipes(event => { // 使用新的 ServerEvents 系统
    event.shaped(
        'sophisticatedbackpacks:stack_upgrade_omega_tier', // 输出物品
        [
            '111',
            '121',
            '111'          // 合成图案
        ],
        {
            1: 'minecraft:diamond_block', // 键 1 对应钻石块
            2: 'sophisticatedbackpacks:stack_upgrade_tier_1' // 键 2 对应 tier1 升级
        }
    ).id("kubejs:sophisticatedbackpacks_stack_upgrade_omega_tier")
    event.shaped(
        'sophisticatedstorage:stack_upgrade_omega_tier',
        [
            '111',
            '121',
            '111'
        ],
        {
            1: 'minecraft:diamond_block',
            2: 'sophisticatedstorage:stack_upgrade_tier_1'
        }
    ).id("kubejs:sophisticatedstorage_stack_upgrade_omega_tier")
})