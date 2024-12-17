<script setup lang="ts">
const route = useRoute();
const appConfig = useAppConfig();
const { isHelpSlideoverOpen } = useDashboard();

const links = [
  // {
  //   id: "home",
  //   label: "Home",
  //   icon: "i-heroicons-home",
  //   to: "/",
  //   tooltip: {
  //     text: "Home",
  //     shortcuts: ["G", "H"],
  //   },
  // },
  {
    id: "businesses",
    label: "Businesses",
    icon: "i-heroicons-briefcase",
    to: "/dashboard/business",
    tooltip: {
      text: "Business",
      shortcuts: ["B", "U"],
    },
  },
  {
    id: "workers",
    label: "Workers",
    icon: "i-heroicons-user-group",
    to: "/dashboard/workers",
    tooltip: {
      text: "Workers",
      shortcuts: ["W", "U"],
    },
  },
  {
    id: "gigs",
    label: "Gigs",
    icon: "i-heroicons-square-3-stack-3d",
    to: "/dashboard/gigs",
    tooltip: {
      text: "Gigs",
      shortcuts: ["B", "U"],
    },
  },
  {
    id: "payouts",
    label: "Payouts",
    icon: "i-heroicons-banknotes",
    to: "/dashboard/payouts",
    tooltip: {
      text: "Payouts",
      shortcuts: ["P", "U"],
    },
  },
  // {
  //   id: 'settings',
  //   label: 'Settings',
  //   to: '/settings',
  //   icon: 'i-heroicons-cog-8-tooth',
  //   children: [{
  //     label: 'General',
  //     to: '/settings',
  //     exact: true
  //   }, {
  //     label: 'Admins',
  //     to: '/settings/members'
  //   }, {
  //     label: 'Notifications',
  //     to: '/settings/notifications'
  //   }],
  //   tooltip: {
  //     text: 'Settings',
  //     shortcuts: ['G', 'S']
  //   }
  // }
];

const footerLinks = [
  {
    label: "Add Admin",
    icon: "i-heroicons-plus",
    to: "/settings/members",
  },
  {
    label: "Help & Support",
    icon: "i-heroicons-question-mark-circle",
    click: () => (isHelpSlideoverOpen.value = true),
  },
];

const groups = [
  {
    key: "links",
    label: "Go to",
    commands: links.map((link) => ({
      ...link,
      shortcuts: link.tooltip?.shortcuts,
    })),
  },
];
</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel
      :width="250"
      :resizable="{ min: 200, max: 300 }"
      collapsible
    >
      <UDashboardNavbar class="!border-transparent" :ui="{ left: 'flex-1' }">
        <template #left>
          <div class="flex items-center gap-2">
            <img
              src="../assets/images/icon.png"
              alt="Apera Logo"
              class="size-8 rounded-full"
            />
            <span class="font-black text-lg uppercase">Apera</span>
          </div>
        </template>
      </UDashboardNavbar>

      <UDashboardSidebar>
        <template #header>
          <UDashboardSearchButton />
        </template>

        <UDashboardSidebarLinks :links="links" />

        <UDivider />

        <div class="flex-1" />

        <UDashboardSidebarLinks :links="footerLinks" />

        <UDivider class="sticky bottom-0" />

        <template #footer>
          <!-- ~/components/UserDropdown.vue -->
          <UserDropdown />
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>

    <slot />

    <!-- ~/components/HelpSlideover.vue -->
    <HelpSlideover />
    <!-- ~/components/NotificationsSlideover.vue -->
    <NotificationsSlideover />

    <ClientOnly>
      <LazyUDashboardSearch :groups="groups" />
    </ClientOnly>
  </UDashboardLayout>
</template>
