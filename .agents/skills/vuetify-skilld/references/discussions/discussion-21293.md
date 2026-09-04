---
number: 21293
title: v-treeview not able to find a way to move expand button to right end, after title
category: Q&A
created: 2025-04-21
url: "https://github.com/vuetifyjs/vuetify/discussions/21293"
upvotes: 2
comments: 2
answered: true
---

# v-treeview not able to find a way to move expand button to right end, after title

<img width="226" alt="image" src="https://github.com/user-attachments/assets/32550329-7211-435e-a0e3-b13b4fd45780" />
Client asked to move the expand button to end of the title, to make it look 'more natural'

Did not find a way to it. Anyone had similar task?


---

## Accepted Answer

~~Pass `null` instead of `false` to hide left icons~~
Edit: we have `hide-actions` since 3.9.0

Internally, that left icon is a `VBtn` [[1]](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VTreeview/VTreeviewItem.tsx#L95), but in this case it is easier to use `VIconBtn` with additional `v-ripple` to have exactly the same result.

[Playground](https://play.vuetifyjs.com/#eNqFVV1r2zAU/SuaGXiFyGEdhS6kG2Xr4xj0NQlDseRUrSwZS3a9Bf/33Stb/khS6ofYOufeq3M/pGyOkS3T5X1RJHUlolW0diIvFHPi21YTsq6pK4WopXjFJSE1zQ0XamUKoQW/20b4sY06ciXB2QLo3wHlQlvp/gKcmrxgqQsEWtGaqUoA56RTIjBgJGvm2B4gDzxJLiiiRtsOwX2p0TRVMn1ByOsFxUE/SLXKuFVRCjBFqUe/44JI+xsQ0m6j3sfnKVOjwxLzlBm4fECPJJOjtC5PsMU0u0DfSZxzSTOjuCgpCovJaorFo/PydEvYSSgrhpi4l90M2+620eCzXs56cyFXX8Qh01mGxw5LvAlp2xMZdO/Os/cO6ZNUvByb7HlWSqYdtk00Qz/xsfIfCri+nZnTUhZF6OW0glisROpUVVzYT6PAKyzqxzB6P4xSrLDCl3VAH5qCaX6htid1Wi/HIQZgxsLSpiDOEStcVXh7mRemdORI7BNTyrw+ioy0JCtNTmI4IzF6EQL6rfNTSO4mlp82cVHtYSbj3dVo5ps6tzv2g+1y1c+KYvpQsYOgiN3Ei87g2fa0hnP3bEf...