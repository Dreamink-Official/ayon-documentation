---
id: dev_deadline
title: Deadline integration
sidebar_label: Deadline integration
toc_max_heading_level: 4
---

Deadline is not host as usual, it is missing most of the host features, but it does have
its own set of publishing plugins.

## How to test AYON on Deadline

### Bundles

AYON describes itself by two environment variables when publishing:
- AYON_BUNDLE_NAME - name of used bundle where publish was started from
- AYON_DEFAULT_SETTINGS_VARIANT - variant of setting, could be 'production'|'staging'|any name of bundle denotes development bundle.

Please make sure that used bundle names are actually still on the server. You could probably find old publishes on Deadline when
if re-submitted would fail, as origin bundle would be already archived on the server.

### Running DL in development

Sometimes could be beneficial to use dev bundles to speed up development. This kind of bundle can point any of the addons to their
respective folder with client code, without need to create addon package, deploy it to the server, restarting server etc.

Deadline could handle dev bundle with two aforementioned environment variables. If you, as a developer, would trigger publish and
use dev bundle, its name would be propagated via AYON_DEFAULT_SETTINGS_VARIANT.

See [Dev mode](dev_dev_mode.md#dev-bundle)

### Known issues and limitations

#### Deadline AYON plugins

Even if multiple developers or artists could run different bundles from AYON server, there is still limiting factor of custom AYON Deadline plugins.

These needs to be deployed in `DEADLINE_REPO/custom` folder and cannot be differentiated. These plugins handle mostly injection of 
AYON environment variables, and it is expected, that they would be pretty stable.

#### No Multiple AYON servers

AYON server can select multiple target Deadline urls via Project Settings, eg. publishes from separate projects could be segregated into
multiple Deadline servers.

As AYONs Deadline plugin needs to:
- query local AYON tray to get proper configured environment (`injection of environment variables`)
- trigger publishing job (which will rename and put all rendered files into proper locations)

For this Deadline plugin needs to know:
- path to AYON Tray executable installed on worker node
- API key to AYON

This is currently possible only via Deadline plugin configuration `Tools > Configure Plugins > AYON`, eg. only single AYON server could be used.

