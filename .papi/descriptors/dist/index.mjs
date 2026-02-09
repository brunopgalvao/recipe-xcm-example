// .papi/descriptors/src/common.ts
var table = new Uint8Array(128);
for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
var toBinary = (base64) => {
  const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
  for (let i2 = 0, j = 0; i2 < n; ) {
    const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
    const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
    bytes[j++] = c0 << 2 | c1 >> 4;
    bytes[j++] = c1 << 4 | c2 >> 2;
    bytes[j++] = c2 << 6 | c3;
  }
  return bytes;
};

// .papi/descriptors/src/ahp.ts
var descriptorValues = import("./descriptors-IKNVEDW5.mjs").then((module) => module["Ahp"]);
var metadataTypes = import("./metadataTypes-UQCA6SFL.mjs").then(
  (module) => toBinary("default" in module ? module.default : module)
);
var asset = {};
var getMetadata = () => import("./ahp_metadata-53HGHWEV.mjs").then(
  (module) => toBinary("default" in module ? module.default : module)
);
var genesis = "0x862ce2fa5abfdc3d29ead85a9472071efc69433b0128db1d6f009967fae87952";
var _allDescriptors = { descriptors: descriptorValues, metadataTypes, asset, getMetadata, genesis };
var ahp_default = _allDescriptors;

// .papi/descriptors/src/common-types.ts
import { _Enum } from "polkadot-api";
var DigestItem = _Enum;
var Phase = _Enum;
var DispatchClass = _Enum;
var TokenError = _Enum;
var ArithmeticError = _Enum;
var TransactionalError = _Enum;
var BalanceStatus = _Enum;
var TransactionPaymentEvent = _Enum;
var SessionEvent = _Enum;
var XcmV3TraitsError = _Enum;
var XcmV3JunctionBodyId = _Enum;
var XcmV2JunctionBodyPart = _Enum;
var XcmV3MultiassetFungibility = _Enum;
var XcmV3MultiassetAssetInstance = _Enum;
var XcmV3MaybeErrorCode = _Enum;
var XcmV2OriginKind = _Enum;
var XcmV2MultiassetWildFungibility = _Enum;
var XcmV3WeightLimit = _Enum;
var XcmV2MultiassetAssetId = _Enum;
var XcmV2MultilocationJunctions = _Enum;
var XcmV2Junction = _Enum;
var XcmV2NetworkId = _Enum;
var XcmV2BodyId = _Enum;
var XcmV2MultiassetFungibility = _Enum;
var XcmV2MultiassetAssetInstance = _Enum;
var UpgradeGoAhead = _Enum;
var UpgradeRestriction = _Enum;
var BalancesTypesReasons = _Enum;
var TransactionPaymentReleases = _Enum;
var XcmV2Response = _Enum;
var XcmV2TraitsError = _Enum;
var XcmPalletVersionMigrationStage = _Enum;
var MultiAddress = _Enum;
var XcmV2Instruction = _Enum;
var XcmV2MultiAssetFilter = _Enum;
var XcmV2MultiassetWildMultiAsset = _Enum;
var XcmV2WeightLimit = _Enum;
var DispatchRawOrigin = _Enum;
var MultiSignature = _Enum;
var TransactionValidityError = _Enum;
var TransactionValidityInvalidTransaction = _Enum;
var TransactionValidityUnknownTransaction = _Enum;
var TransactionValidityTransactionSource = _Enum;

// .papi/descriptors/src/index.ts
var metadatas = { ["0x9d992d08bc7b2117f7899cd3b003e0d2bce57d81d01aec0a1c6b6284483c3950"]: ahp_default };
var getMetadata2 = async (codeHash) => {
  try {
    return await metadatas[codeHash].getMetadata();
  } catch {
  }
  return null;
};
export {
  ArithmeticError,
  BalanceStatus,
  BalancesTypesReasons,
  DigestItem,
  DispatchClass,
  DispatchRawOrigin,
  MultiAddress,
  MultiSignature,
  Phase,
  SessionEvent,
  TokenError,
  TransactionPaymentEvent,
  TransactionPaymentReleases,
  TransactionValidityError,
  TransactionValidityInvalidTransaction,
  TransactionValidityTransactionSource,
  TransactionValidityUnknownTransaction,
  TransactionalError,
  UpgradeGoAhead,
  UpgradeRestriction,
  XcmPalletVersionMigrationStage,
  XcmV2BodyId,
  XcmV2Instruction,
  XcmV2Junction,
  XcmV2JunctionBodyPart,
  XcmV2MultiAssetFilter,
  XcmV2MultiassetAssetId,
  XcmV2MultiassetAssetInstance,
  XcmV2MultiassetFungibility,
  XcmV2MultiassetWildFungibility,
  XcmV2MultiassetWildMultiAsset,
  XcmV2MultilocationJunctions,
  XcmV2NetworkId,
  XcmV2OriginKind,
  XcmV2Response,
  XcmV2TraitsError,
  XcmV2WeightLimit,
  XcmV3JunctionBodyId,
  XcmV3MaybeErrorCode,
  XcmV3MultiassetAssetInstance,
  XcmV3MultiassetFungibility,
  XcmV3TraitsError,
  XcmV3WeightLimit,
  ahp_default as ahp,
  getMetadata2 as getMetadata
};
