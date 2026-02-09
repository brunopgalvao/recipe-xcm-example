import { Enum, GetEnum, FixedSizeBinary, Binary, SS58String, FixedSizeArray, ResultPayload, TxCallData } from "polkadot-api";
type AnonymousEnum<T extends {}> = T & {
    __anonymous: true;
};
type MyTuple<T> = [T, ...T[]];
type SeparateUndefined<T> = undefined extends T ? undefined | Exclude<T, undefined> : T;
type Anonymize<T> = SeparateUndefined<T extends FixedSizeBinary<infer L> ? number extends L ? Binary : FixedSizeBinary<L> : T extends string | number | bigint | boolean | void | undefined | null | symbol | Uint8Array | Enum<any> ? T : T extends AnonymousEnum<infer V> ? Enum<V> : T extends MyTuple<any> ? {
    [K in keyof T]: T[K];
} : T extends [] ? [] : T extends FixedSizeArray<infer L, infer T> ? number extends L ? Array<T> : FixedSizeArray<L, T> : {
    [K in keyof T & string]: T[K];
}>;
export type I5sesotjlssv2d = {
    "nonce": number;
    "consumers": number;
    "providers": number;
    "sufficients": number;
    "data": Anonymize<I1q8tnt1cluu5j>;
};
export type I1q8tnt1cluu5j = {
    "free": bigint;
    "reserved": bigint;
    "frozen": bigint;
    "flags": bigint;
};
export type Iffmde3ekjedi9 = {
    "normal": Anonymize<I4q39t5hn830vp>;
    "operational": Anonymize<I4q39t5hn830vp>;
    "mandatory": Anonymize<I4q39t5hn830vp>;
};
export type I4q39t5hn830vp = {
    "ref_time": bigint;
    "proof_size": bigint;
};
export type I4mddgoa69c0a2 = Array<DigestItem>;
export type DigestItem = Enum<{
    "PreRuntime": Anonymize<I82jm9g7pufuel>;
    "Consensus": Anonymize<I82jm9g7pufuel>;
    "Seal": Anonymize<I82jm9g7pufuel>;
    "Other": Binary;
    "RuntimeEnvironmentUpdated": undefined;
}>;
export declare const DigestItem: GetEnum<DigestItem>;
export type I82jm9g7pufuel = [FixedSizeBinary<4>, Binary];
export type Ia7vmvpm03b3aj = Array<{
    "phase": Phase;
    "event": Enum<{
        "System": Anonymize<I5r26pcccdb7at>;
        "ParachainSystem": Anonymize<Iattscgt3q8j3r>;
        "Balances": Anonymize<Ipa3jfc46ilad>;
        "TransactionPayment": TransactionPaymentEvent;
        "AssetTxPayment": Anonymize<I21mhhl8m4b79b>;
        "CollatorSelection": Anonymize<I2k46ltub59oi1>;
        "Session": SessionEvent;
        "XcmpQueue": Anonymize<I8umj05c18ked4>;
        "PolkadotXcm": Anonymize<I4r0b7tct6o9ht>;
        "CumulusXcm": Anonymize<I4f9jlfai43i7r>;
        "DmpQueue": Anonymize<I5s7k7819l2j41>;
        "Utility": Anonymize<I6587eoal236ul>;
        "Multisig": Anonymize<I11d9rom6oq3lr>;
        "Proxy": Anonymize<I7i68upu5tto4d>;
        "Assets": Anonymize<Ie4o50pgs5mq4e>;
        "Uniques": Anonymize<Ia0j71vjrjqu9p>;
        "Nfts": Anonymize<I6qicn8jn4fftj>;
        "ForeignAssets": Anonymize<Id6v2u1eq6bj9n>;
    }>;
    "topics": Anonymize<Ic5m5lp1oioo8r>;
}>;
export type Phase = Enum<{
    "ApplyExtrinsic": number;
    "Finalization": undefined;
    "Initialization": undefined;
}>;
export declare const Phase: GetEnum<Phase>;
export type I5r26pcccdb7at = AnonymousEnum<{
    /**
     * An extrinsic completed successfully.
     */
    "ExtrinsicSuccess": Anonymize<Ia82mnkmeo2rhc>;
    /**
     * An extrinsic failed.
     */
    "ExtrinsicFailed": Anonymize<I3ehp1l633mpva>;
    /**
     * `:code` was updated.
     */
    "CodeUpdated": undefined;
    /**
     * A new account was created.
     */
    "NewAccount": Anonymize<Icbccs0ug47ilf>;
    /**
     * An account was reaped.
     */
    "KilledAccount": Anonymize<Icbccs0ug47ilf>;
    /**
     * On on-chain remark happened.
     */
    "Remarked": Anonymize<I855j4i3kr8ko1>;
}>;
export type Ia82mnkmeo2rhc = {
    "dispatch_info": Anonymize<Ic9s8f85vjtncc>;
};
export type Ic9s8f85vjtncc = {
    "weight": Anonymize<I4q39t5hn830vp>;
    "class": DispatchClass;
    "pays_fee": Enum<{
        "Yes": undefined;
        "No": undefined;
    }>;
};
export type DispatchClass = Enum<{
    "Normal": undefined;
    "Operational": undefined;
    "Mandatory": undefined;
}>;
export declare const DispatchClass: GetEnum<DispatchClass>;
export type I3ehp1l633mpva = {
    "dispatch_error": Anonymize<I55o1f0t1icsot>;
    "dispatch_info": Anonymize<Ic9s8f85vjtncc>;
};
export type I55o1f0t1icsot = AnonymousEnum<{
    "Other": undefined;
    "CannotLookup": undefined;
    "BadOrigin": undefined;
    "Module": Enum<{
        "System": Anonymize<I2b5jj3f5ebo54>;
        "ParachainSystem": Anonymize<I9p95gln24a0rn>;
        "Timestamp": undefined;
        "ParachainInfo": undefined;
        "Balances": Anonymize<Ife9031aj6on0k>;
        "TransactionPayment": undefined;
        "AssetTxPayment": undefined;
        "Authorship": undefined;
        "CollatorSelection": Anonymize<I1ud9but9pj0h0>;
        "Session": Anonymize<I1e07dgbaqd1sq>;
        "Aura": undefined;
        "AuraExt": undefined;
        "XcmpQueue": Anonymize<Idcmk0ovgq4f24>;
        "PolkadotXcm": Anonymize<I93avf3rpkhb2d>;
        "CumulusXcm": undefined;
        "DmpQueue": Anonymize<I5634m9tbik43k>;
        "Utility": Anonymize<I8dt2g2hcrgh36>;
        "Multisig": Anonymize<Ia76qmhhg4jvb9>;
        "Proxy": Anonymize<Iuvt54ei4cehc>;
        "Assets": Anonymize<Ifn5p2ma236tv1>;
        "Uniques": Anonymize<Ienq2ge2rhv4jm>;
        "Nfts": Anonymize<I58r1150kmj18u>;
        "ForeignAssets": Anonymize<Ifn5p2ma236tv1>;
    }>;
    "ConsumerRemaining": undefined;
    "NoProviders": undefined;
    "TooManyConsumers": undefined;
    "Token": TokenError;
    "Arithmetic": ArithmeticError;
    "Transactional": TransactionalError;
    "Exhausted": undefined;
    "Corruption": undefined;
    "Unavailable": undefined;
    "RootNotAllowed": undefined;
}>;
export type I2b5jj3f5ebo54 = AnonymousEnum<{
    /**
     * The name of specification does not match between the current runtime
     * and the new runtime.
     */
    "InvalidSpecName": undefined;
    /**
     * The specification version is not allowed to decrease between the current runtime
     * and the new runtime.
     */
    "SpecVersionNeedsToIncrease": undefined;
    /**
     * Failed to extract the runtime version from the new runtime.
     *
     * Either calling `Core_version` or decoding `RuntimeVersion` failed.
     */
    "FailedToExtractRuntimeVersion": undefined;
    /**
     * Suicide called when the account has non-default composite data.
     */
    "NonDefaultComposite": undefined;
    /**
     * There is a non-zero reference count preventing the account from being purged.
     */
    "NonZeroRefCount": undefined;
    /**
     * The origin filter prevent the call to be dispatched.
     */
    "CallFiltered": undefined;
}>;
export type I9p95gln24a0rn = AnonymousEnum<{
    /**
     * Attempt to upgrade validation function while existing upgrade pending.
     */
    "OverlappingUpgrades": undefined;
    /**
     * Polkadot currently prohibits this parachain from upgrading its validation function.
     */
    "ProhibitedByPolkadot": undefined;
    /**
     * The supplied validation function has compiled into a blob larger than Polkadot is
     * willing to run.
     */
    "TooBig": undefined;
    /**
     * The inherent which supplies the validation data did not run this block.
     */
    "ValidationDataNotAvailable": undefined;
    /**
     * The inherent which supplies the host configuration did not run this block.
     */
    "HostConfigurationNotAvailable": undefined;
    /**
     * No validation function upgrade is currently scheduled.
     */
    "NotScheduled": undefined;
    /**
     * No code upgrade has been authorized.
     */
    "NothingAuthorized": undefined;
    /**
     * The given code upgrade has not been authorized.
     */
    "Unauthorized": undefined;
}>;
export type Ife9031aj6on0k = AnonymousEnum<{
    /**
     * Vesting balance too high to send value.
     */
    "VestingBalance": undefined;
    /**
     * Account liquidity restrictions prevent withdrawal.
     */
    "LiquidityRestrictions": undefined;
    /**
     * Balance too low to send value.
     */
    "InsufficientBalance": undefined;
    /**
     * Value too low to create account due to existential deposit.
     */
    "ExistentialDeposit": undefined;
    /**
     * Transfer/payment would kill account.
     */
    "Expendability": undefined;
    /**
     * A vesting schedule already exists for this account.
     */
    "ExistingVestingSchedule": undefined;
    /**
     * Beneficiary account must pre-exist.
     */
    "DeadAccount": undefined;
    /**
     * Number of named reserves exceed `MaxReserves`.
     */
    "TooManyReserves": undefined;
    /**
     * Number of holds exceed `MaxHolds`.
     */
    "TooManyHolds": undefined;
    /**
     * Number of freezes exceed `MaxFreezes`.
     */
    "TooManyFreezes": undefined;
}>;
export type I1ud9but9pj0h0 = AnonymousEnum<{
    /**
     * The pallet has too many candidates.
     */
    "TooManyCandidates": undefined;
    /**
     * Leaving would result in too few candidates.
     */
    "TooFewEligibleCollators": undefined;
    /**
     * Account is already a candidate.
     */
    "AlreadyCandidate": undefined;
    /**
     * Account is not a candidate.
     */
    "NotCandidate": undefined;
    /**
     * There are too many Invulnerables.
     */
    "TooManyInvulnerables": undefined;
    /**
     * Account is already an Invulnerable.
     */
    "AlreadyInvulnerable": undefined;
    /**
     * Account is not an Invulnerable.
     */
    "NotInvulnerable": undefined;
    /**
     * Account has no associated validator ID.
     */
    "NoAssociatedValidatorId": undefined;
    /**
     * Validator ID is not yet registered.
     */
    "ValidatorNotRegistered": undefined;
}>;
export type I1e07dgbaqd1sq = AnonymousEnum<{
    /**
     * Invalid ownership proof.
     */
    "InvalidProof": undefined;
    /**
     * No associated validator ID for account.
     */
    "NoAssociatedValidatorId": undefined;
    /**
     * Registered duplicate key.
     */
    "DuplicatedKey": undefined;
    /**
     * No keys are associated with this account.
     */
    "NoKeys": undefined;
    /**
     * Key setting account is not live, so it's impossible to associate keys.
     */
    "NoAccount": undefined;
}>;
export type Idcmk0ovgq4f24 = AnonymousEnum<{
    /**
     * Failed to send XCM message.
     */
    "FailedToSend": undefined;
    /**
     * Bad XCM origin.
     */
    "BadXcmOrigin": undefined;
    /**
     * Bad XCM data.
     */
    "BadXcm": undefined;
    /**
     * Bad overweight index.
     */
    "BadOverweightIndex": undefined;
    /**
     * Provided weight is possibly not enough to execute the message.
     */
    "WeightOverLimit": undefined;
}>;
export type I93avf3rpkhb2d = AnonymousEnum<{
    /**
     * The desired destination was unreachable, generally because there is a no way of routing
     * to it.
     */
    "Unreachable": undefined;
    /**
     * There was some other issue (i.e. not to do with routing) in sending the message.
     * Perhaps a lack of space for buffering the message.
     */
    "SendFailure": undefined;
    /**
     * The message execution fails the filter.
     */
    "Filtered": undefined;
    /**
     * The message's weight could not be determined.
     */
    "UnweighableMessage": undefined;
    /**
     * The destination `MultiLocation` provided cannot be inverted.
     */
    "DestinationNotInvertible": undefined;
    /**
     * The assets to be sent are empty.
     */
    "Empty": undefined;
    /**
     * Could not re-anchor the assets to declare the fees for the destination chain.
     */
    "CannotReanchor": undefined;
    /**
     * Too many assets have been attempted for transfer.
     */
    "TooManyAssets": undefined;
    /**
     * Origin is invalid for sending.
     */
    "InvalidOrigin": undefined;
    /**
     * The version of the `Versioned` value used is not able to be interpreted.
     */
    "BadVersion": undefined;
    /**
     * The given location could not be used (e.g. because it cannot be expressed in the
     * desired version of XCM).
     */
    "BadLocation": undefined;
    /**
     * The referenced subscription could not be found.
     */
    "NoSubscription": undefined;
    /**
     * The location is invalid since it already has a subscription from us.
     */
    "AlreadySubscribed": undefined;
    /**
     * Invalid asset for the operation.
     */
    "InvalidAsset": undefined;
    /**
     * The owner does not own (all) of the asset that they wish to do the operation on.
     */
    "LowBalance": undefined;
    /**
     * The asset owner has too many locks on the asset.
     */
    "TooManyLocks": undefined;
    /**
     * The given account is not an identifiable sovereign account for any location.
     */
    "AccountNotSovereign": undefined;
    /**
     * The operation required fees to be paid which the initiator could not meet.
     */
    "FeesNotMet": undefined;
    /**
     * A remote lock with the corresponding data could not be found.
     */
    "LockNotFound": undefined;
    /**
     * The unlock operation cannot succeed because there are still consumers of the lock.
     */
    "InUse": undefined;
}>;
export type I5634m9tbik43k = AnonymousEnum<{
    /**
     * The message index given is unknown.
     */
    "Unknown": undefined;
    /**
     * The amount of weight given is possibly not enough for executing the message.
     */
    "OverLimit": undefined;
}>;
export type I8dt2g2hcrgh36 = AnonymousEnum<{
    /**
     * Too many calls batched.
     */
    "TooManyCalls": undefined;
}>;
export type Ia76qmhhg4jvb9 = AnonymousEnum<{
    /**
     * Threshold must be 2 or greater.
     */
    "MinimumThreshold": undefined;
    /**
     * Call is already approved by this signatory.
     */
    "AlreadyApproved": undefined;
    /**
     * Call doesn't need any (more) approvals.
     */
    "NoApprovalsNeeded": undefined;
    /**
     * There are too few signatories in the list.
     */
    "TooFewSignatories": undefined;
    /**
     * There are too many signatories in the list.
     */
    "TooManySignatories": undefined;
    /**
     * The signatories were provided out of order; they should be ordered.
     */
    "SignatoriesOutOfOrder": undefined;
    /**
     * The sender was contained in the other signatories; it shouldn't be.
     */
    "SenderInSignatories": undefined;
    /**
     * Multisig operation not found when attempting to cancel.
     */
    "NotFound": undefined;
    /**
     * Only the account that originally created the multisig is able to cancel it.
     */
    "NotOwner": undefined;
    /**
     * No timepoint was given, yet the multisig operation is already underway.
     */
    "NoTimepoint": undefined;
    /**
     * A different timepoint was given to the multisig operation that is underway.
     */
    "WrongTimepoint": undefined;
    /**
     * A timepoint was given, yet no multisig operation is underway.
     */
    "UnexpectedTimepoint": undefined;
    /**
     * The maximum weight information provided was too low.
     */
    "MaxWeightTooLow": undefined;
    /**
     * The data to be stored is already stored.
     */
    "AlreadyStored": undefined;
}>;
export type Iuvt54ei4cehc = AnonymousEnum<{
    /**
     * There are too many proxies registered or too many announcements pending.
     */
    "TooMany": undefined;
    /**
     * Proxy registration not found.
     */
    "NotFound": undefined;
    /**
     * Sender is not a proxy of the account to be proxied.
     */
    "NotProxy": undefined;
    /**
     * A call which is incompatible with the proxy type's filter was attempted.
     */
    "Unproxyable": undefined;
    /**
     * Account is already a proxy.
     */
    "Duplicate": undefined;
    /**
     * Call may not be made by proxy because it may escalate its privileges.
     */
    "NoPermission": undefined;
    /**
     * Announcement, if made at all, was made too recently.
     */
    "Unannounced": undefined;
    /**
     * Cannot add self as proxy.
     */
    "NoSelfProxy": undefined;
}>;
export type Ifn5p2ma236tv1 = AnonymousEnum<{
    /**
     * Account balance must be greater than or equal to the transfer amount.
     */
    "BalanceLow": undefined;
    /**
     * The account to alter does not exist.
     */
    "NoAccount": undefined;
    /**
     * The signing account has no permission to do the operation.
     */
    "NoPermission": undefined;
    /**
     * The given asset ID is unknown.
     */
    "Unknown": undefined;
    /**
     * The origin account is frozen.
     */
    "Frozen": undefined;
    /**
     * The asset ID is already taken.
     */
    "InUse": undefined;
    /**
     * Invalid witness data given.
     */
    "BadWitness": undefined;
    /**
     * Minimum balance should be non-zero.
     */
    "MinBalanceZero": undefined;
    /**
     * Unable to increment the consumer reference counters on the account. Either no provider
     * reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
     * fewer then the maximum number of consumers has been reached.
     */
    "UnavailableConsumer": undefined;
    /**
     * Invalid metadata given.
     */
    "BadMetadata": undefined;
    /**
     * No approval exists that would allow the transfer.
     */
    "Unapproved": undefined;
    /**
     * The source account would not survive the transfer and it needs to stay alive.
     */
    "WouldDie": undefined;
    /**
     * The asset-account already exists.
     */
    "AlreadyExists": undefined;
    /**
     * The asset-account doesn't have an associated deposit.
     */
    "NoDeposit": undefined;
    /**
     * The operation would result in funds being burned.
     */
    "WouldBurn": undefined;
    /**
     * The asset is a live asset and is actively being used. Usually emit for operations such
     * as `start_destroy` which require the asset to be in a destroying state.
     */
    "LiveAsset": undefined;
    /**
     * The asset is not live, and likely being destroyed.
     */
    "AssetNotLive": undefined;
    /**
     * The asset status is not the expected status.
     */
    "IncorrectStatus": undefined;
    /**
     * The asset should be frozen before the given operation.
     */
    "NotFrozen": undefined;
    /**
     * Callback action resulted in error
     */
    "CallbackFailed": undefined;
}>;
export type Ienq2ge2rhv4jm = AnonymousEnum<{
    /**
     * The signing account has no permission to do the operation.
     */
    "NoPermission": undefined;
    /**
     * The given item ID is unknown.
     */
    "UnknownCollection": undefined;
    /**
     * The item ID has already been used for an item.
     */
    "AlreadyExists": undefined;
    /**
     * The owner turned out to be different to what was expected.
     */
    "WrongOwner": undefined;
    /**
     * Invalid witness data given.
     */
    "BadWitness": undefined;
    /**
     * The item ID is already taken.
     */
    "InUse": undefined;
    /**
     * The item or collection is frozen.
     */
    "Frozen": undefined;
    /**
     * The delegate turned out to be different to what was expected.
     */
    "WrongDelegate": undefined;
    /**
     * There is no delegate approved.
     */
    "NoDelegate": undefined;
    /**
     * No approval exists that would allow the transfer.
     */
    "Unapproved": undefined;
    /**
     * The named owner has not signed ownership of the collection is acceptable.
     */
    "Unaccepted": undefined;
    /**
     * The item is locked.
     */
    "Locked": undefined;
    /**
     * All items have been minted.
     */
    "MaxSupplyReached": undefined;
    /**
     * The max supply has already been set.
     */
    "MaxSupplyAlreadySet": undefined;
    /**
     * The provided max supply is less to the amount of items a collection already has.
     */
    "MaxSupplyTooSmall": undefined;
    /**
     * The given item ID is unknown.
     */
    "UnknownItem": undefined;
    /**
     * Item is not for sale.
     */
    "NotForSale": undefined;
    /**
     * The provided bid is too low.
     */
    "BidTooLow": undefined;
}>;
export type I58r1150kmj18u = AnonymousEnum<{
    /**
     * The signing account has no permission to do the operation.
     */
    "NoPermission": undefined;
    /**
     * The given item ID is unknown.
     */
    "UnknownCollection": undefined;
    /**
     * The item ID has already been used for an item.
     */
    "AlreadyExists": undefined;
    /**
     * The approval had a deadline that expired, so the approval isn't valid anymore.
     */
    "ApprovalExpired": undefined;
    /**
     * The owner turned out to be different to what was expected.
     */
    "WrongOwner": undefined;
    /**
     * The witness data given does not match the current state of the chain.
     */
    "BadWitness": undefined;
    /**
     * Collection ID is already taken.
     */
    "CollectionIdInUse": undefined;
    /**
     * Items within that collection are non-transferable.
     */
    "ItemsNonTransferable": undefined;
    /**
     * The provided account is not a delegate.
     */
    "NotDelegate": undefined;
    /**
     * The delegate turned out to be different to what was expected.
     */
    "WrongDelegate": undefined;
    /**
     * No approval exists that would allow the transfer.
     */
    "Unapproved": undefined;
    /**
     * The named owner has not signed ownership acceptance of the collection.
     */
    "Unaccepted": undefined;
    /**
     * The item is locked (non-transferable).
     */
    "ItemLocked": undefined;
    /**
     * Item's attributes are locked.
     */
    "LockedItemAttributes": undefined;
    /**
     * Collection's attributes are locked.
     */
    "LockedCollectionAttributes": undefined;
    /**
     * Item's metadata is locked.
     */
    "LockedItemMetadata": undefined;
    /**
     * Collection's metadata is locked.
     */
    "LockedCollectionMetadata": undefined;
    /**
     * All items have been minted.
     */
    "MaxSupplyReached": undefined;
    /**
     * The max supply is locked and can't be changed.
     */
    "MaxSupplyLocked": undefined;
    /**
     * The provided max supply is less than the number of items a collection already has.
     */
    "MaxSupplyTooSmall": undefined;
    /**
     * The given item ID is unknown.
     */
    "UnknownItem": undefined;
    /**
     * Swap doesn't exist.
     */
    "UnknownSwap": undefined;
    /**
     * The given item has no metadata set.
     */
    "MetadataNotFound": undefined;
    /**
     * The provided attribute can't be found.
     */
    "AttributeNotFound": undefined;
    /**
     * Item is not for sale.
     */
    "NotForSale": undefined;
    /**
     * The provided bid is too low.
     */
    "BidTooLow": undefined;
    /**
     * The item has reached its approval limit.
     */
    "ReachedApprovalLimit": undefined;
    /**
     * The deadline has already expired.
     */
    "DeadlineExpired": undefined;
    /**
     * The duration provided should be less than or equal to `MaxDeadlineDuration`.
     */
    "WrongDuration": undefined;
    /**
     * The method is disabled by system settings.
     */
    "MethodDisabled": undefined;
    /**
     * The provided setting can't be set.
     */
    "WrongSetting": undefined;
    /**
     * Item's config already exists and should be equal to the provided one.
     */
    "InconsistentItemConfig": undefined;
    /**
     * Config for a collection or an item can't be found.
     */
    "NoConfig": undefined;
    /**
     * Some roles were not cleared.
     */
    "RolesNotCleared": undefined;
    /**
     * Mint has not started yet.
     */
    "MintNotStarted": undefined;
    /**
     * Mint has already ended.
     */
    "MintEnded": undefined;
    /**
     * The provided Item was already used for claiming.
     */
    "AlreadyClaimed": undefined;
    /**
     * The provided data is incorrect.
     */
    "IncorrectData": undefined;
    /**
     * The extrinsic was sent by the wrong origin.
     */
    "WrongOrigin": undefined;
    /**
     * The provided signature is incorrect.
     */
    "WrongSignature": undefined;
    /**
     * The provided metadata might be too long.
     */
    "IncorrectMetadata": undefined;
    /**
     * Can't set more attributes per one call.
     */
    "MaxAttributesLimitReached": undefined;
    /**
     * The provided namespace isn't supported in this call.
     */
    "WrongNamespace": undefined;
    /**
     * Can't delete non-empty collections.
     */
    "CollectionNotEmpty": undefined;
    /**
     * The witness data should be provided.
     */
    "WitnessRequired": undefined;
}>;
export type TokenError = Enum<{
    "FundsUnavailable": undefined;
    "OnlyProvider": undefined;
    "BelowMinimum": undefined;
    "CannotCreate": undefined;
    "UnknownAsset": undefined;
    "Frozen": undefined;
    "Unsupported": undefined;
    "CannotCreateHold": undefined;
    "NotExpendable": undefined;
    "Blocked": undefined;
}>;
export declare const TokenError: GetEnum<TokenError>;
export type ArithmeticError = Enum<{
    "Underflow": undefined;
    "Overflow": undefined;
    "DivisionByZero": undefined;
}>;
export declare const ArithmeticError: GetEnum<ArithmeticError>;
export type TransactionalError = Enum<{
    "LimitReached": undefined;
    "NoLayer": undefined;
}>;
export declare const TransactionalError: GetEnum<TransactionalError>;
export type Icbccs0ug47ilf = {
    "account": SS58String;
};
export type I855j4i3kr8ko1 = {
    "sender": SS58String;
    "hash": FixedSizeBinary<32>;
};
export type Iattscgt3q8j3r = AnonymousEnum<{
    /**
     * The validation function has been scheduled to apply.
     */
    "ValidationFunctionStored": undefined;
    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    "ValidationFunctionApplied": Anonymize<Idd7hd99u0ho0n>;
    /**
     * The relay-chain aborted the upgrade process.
     */
    "ValidationFunctionDiscarded": undefined;
    /**
     * An upgrade has been authorized.
     */
    "UpgradeAuthorized": Anonymize<Ib51vk42m1po4n>;
    /**
     * Some downward messages have been received and will be processed.
     */
    "DownwardMessagesReceived": Anonymize<Iafscmv8tjf0ou>;
    /**
     * Downward messages were processed using the given weight.
     */
    "DownwardMessagesProcessed": Anonymize<I100l07kaehdlp>;
    /**
     * An upward message was sent to the relay chain.
     */
    "UpwardMessageSent": Anonymize<I6gnbnvip5vvdi>;
}>;
export type Idd7hd99u0ho0n = {
    "relay_chain_block_num": number;
};
export type Ib51vk42m1po4n = {
    "code_hash": FixedSizeBinary<32>;
};
export type Iafscmv8tjf0ou = {
    "count": number;
};
export type I100l07kaehdlp = {
    "weight_used": Anonymize<I4q39t5hn830vp>;
    "dmq_head": FixedSizeBinary<32>;
};
export type I6gnbnvip5vvdi = {
    "message_hash"?: Anonymize<I4s6vifaf8k998>;
};
export type I4s6vifaf8k998 = (FixedSizeBinary<32>) | undefined;
export type Ipa3jfc46ilad = AnonymousEnum<{
    /**
     * An account was created with some free balance.
     */
    "Endowed": Anonymize<Icv68aq8841478>;
    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    "DustLost": Anonymize<Ic262ibdoec56a>;
    /**
     * Transfer succeeded.
     */
    "Transfer": Anonymize<Iflcfm9b6nlmdd>;
    /**
     * A balance was set by root.
     */
    "BalanceSet": Anonymize<Ijrsf4mnp3eka>;
    /**
     * Some balance was reserved (moved from free to reserved).
     */
    "Reserved": Anonymize<Id5fm4p8lj5qgi>;
    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    "Unreserved": Anonymize<Id5fm4p8lj5qgi>;
    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    "ReserveRepatriated": Anonymize<I8tjvj9uq4b7hi>;
    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    "Deposit": Anonymize<Id5fm4p8lj5qgi>;
    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    "Withdraw": Anonymize<Id5fm4p8lj5qgi>;
    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    "Slashed": Anonymize<Id5fm4p8lj5qgi>;
    /**
     * Some amount was minted into an account.
     */
    "Minted": Anonymize<Id5fm4p8lj5qgi>;
    /**
     * Some amount was burned from an account.
     */
    "Burned": Anonymize<Id5fm4p8lj5qgi>;
    /**
     * Some amount was suspended from an account (it can be restored later).
     */
    "Suspended": Anonymize<Id5fm4p8lj5qgi>;
    /**
     * Some amount was restored into an account.
     */
    "Restored": Anonymize<Id5fm4p8lj5qgi>;
    /**
     * An account was upgraded.
     */
    "Upgraded": Anonymize<I4cbvqmqadhrea>;
    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    "Issued": Anonymize<I3qt1hgg4djhgb>;
    /**
     * Total issuance was decreased by `amount`, creating a debt to be balanced.
     */
    "Rescinded": Anonymize<I3qt1hgg4djhgb>;
    /**
     * Some balance was locked.
     */
    "Locked": Anonymize<Id5fm4p8lj5qgi>;
    /**
     * Some balance was unlocked.
     */
    "Unlocked": Anonymize<Id5fm4p8lj5qgi>;
    /**
     * Some balance was frozen.
     */
    "Frozen": Anonymize<Id5fm4p8lj5qgi>;
    /**
     * Some balance was thawed.
     */
    "Thawed": Anonymize<Id5fm4p8lj5qgi>;
}>;
export type Icv68aq8841478 = {
    "account": SS58String;
    "free_balance": bigint;
};
export type Ic262ibdoec56a = {
    "account": SS58String;
    "amount": bigint;
};
export type Iflcfm9b6nlmdd = {
    "from": SS58String;
    "to": SS58String;
    "amount": bigint;
};
export type Ijrsf4mnp3eka = {
    "who": SS58String;
    "free": bigint;
};
export type Id5fm4p8lj5qgi = {
    "who": SS58String;
    "amount": bigint;
};
export type I8tjvj9uq4b7hi = {
    "from": SS58String;
    "to": SS58String;
    "amount": bigint;
    "destination_status": BalanceStatus;
};
export type BalanceStatus = Enum<{
    "Free": undefined;
    "Reserved": undefined;
}>;
export declare const BalanceStatus: GetEnum<BalanceStatus>;
export type I4cbvqmqadhrea = {
    "who": SS58String;
};
export type I3qt1hgg4djhgb = {
    "amount": bigint;
};
export type TransactionPaymentEvent = Enum<{
    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    "TransactionFeePaid": Anonymize<Ier2cke86dqbr2>;
}>;
export declare const TransactionPaymentEvent: GetEnum<TransactionPaymentEvent>;
export type Ier2cke86dqbr2 = {
    "who": SS58String;
    "actual_fee": bigint;
    "tip": bigint;
};
export type I21mhhl8m4b79b = AnonymousEnum<{
    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who` in an asset `asset_id`.
     */
    "AssetTxFeePaid": Anonymize<I94ss5ias99t8d>;
}>;
export type I94ss5ias99t8d = {
    "who": SS58String;
    "actual_fee": bigint;
    "tip": bigint;
    "asset_id"?: Anonymize<I4arjljr6dpflb>;
};
export type I4arjljr6dpflb = (number) | undefined;
export type I2k46ltub59oi1 = AnonymousEnum<{
    /**
     * New Invulnerables were set.
     */
    "NewInvulnerables": Anonymize<I39t01nnod9109>;
    /**
     * A new Invulnerable was added.
     */
    "InvulnerableAdded": Anonymize<I6v8sm60vvkmk7>;
    /**
     * An Invulnerable was removed.
     */
    "InvulnerableRemoved": Anonymize<I6v8sm60vvkmk7>;
    /**
     * The number of desired candidates was set.
     */
    "NewDesiredCandidates": Anonymize<I1qmtmbe5so8r3>;
    /**
     * The candidacy bond was set.
     */
    "NewCandidacyBond": Anonymize<Ih99m6ehpcar7>;
    /**
     * A new candidate joined.
     */
    "CandidateAdded": Anonymize<Idgorhsbgdq2ap>;
    /**
     * A candidate was removed.
     */
    "CandidateRemoved": Anonymize<I6v8sm60vvkmk7>;
    /**
     * An account was unable to be added to the Invulnerables because they did not have keys
     * registered. Other Invulnerables may have been set.
     */
    "InvalidInvulnerableSkipped": Anonymize<I6v8sm60vvkmk7>;
}>;
export type I39t01nnod9109 = {
    "invulnerables": Anonymize<Ia2lhg7l2hilo3>;
};
export type Ia2lhg7l2hilo3 = Array<SS58String>;
export type I6v8sm60vvkmk7 = {
    "account_id": SS58String;
};
export type I1qmtmbe5so8r3 = {
    "desired_candidates": number;
};
export type Ih99m6ehpcar7 = {
    "bond_amount": bigint;
};
export type Idgorhsbgdq2ap = {
    "account_id": SS58String;
    "deposit": bigint;
};
export type SessionEvent = Enum<{
    /**
     * New session has happened. Note that the argument is the session index, not the
     * block number as the type might suggest.
     */
    "NewSession": Anonymize<I2hq50pu2kdjpo>;
}>;
export declare const SessionEvent: GetEnum<SessionEvent>;
export type I2hq50pu2kdjpo = {
    "session_index": number;
};
export type I8umj05c18ked4 = AnonymousEnum<{
    /**
     * Some XCM was executed ok.
     */
    "Success": Anonymize<I2650grdiibijj>;
    /**
     * Some XCM failed.
     */
    "Fail": Anonymize<I5q96bb8stug61>;
    /**
     * Bad XCM version used.
     */
    "BadVersion": Anonymize<I137t1cld92pod>;
    /**
     * Bad XCM format used.
     */
    "BadFormat": Anonymize<I137t1cld92pod>;
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    "XcmpMessageSent": Anonymize<I137t1cld92pod>;
    /**
     * An XCM exceeded the individual message weight budget.
     */
    "OverweightEnqueued": Anonymize<If8b64mo2bodj0>;
    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    "OverweightServiced": Anonymize<Icu5p58ltu1veo>;
}>;
export type I2650grdiibijj = {
    "message_hash": FixedSizeBinary<32>;
    "message_id": FixedSizeBinary<32>;
    "weight": Anonymize<I4q39t5hn830vp>;
};
export type I5q96bb8stug61 = {
    "message_hash": FixedSizeBinary<32>;
    "message_id": FixedSizeBinary<32>;
    "error": XcmV3TraitsError;
    "weight": Anonymize<I4q39t5hn830vp>;
};
export type XcmV3TraitsError = Enum<{
    "Overflow": undefined;
    "Unimplemented": undefined;
    "UntrustedReserveLocation": undefined;
    "UntrustedTeleportLocation": undefined;
    "LocationFull": undefined;
    "LocationNotInvertible": undefined;
    "BadOrigin": undefined;
    "InvalidLocation": undefined;
    "AssetNotFound": undefined;
    "FailedToTransactAsset": undefined;
    "NotWithdrawable": undefined;
    "LocationCannotHold": undefined;
    "ExceedsMaxMessageSize": undefined;
    "DestinationUnsupported": undefined;
    "Transport": undefined;
    "Unroutable": undefined;
    "UnknownClaim": undefined;
    "FailedToDecode": undefined;
    "MaxWeightInvalid": undefined;
    "NotHoldingFees": undefined;
    "TooExpensive": undefined;
    "Trap": bigint;
    "ExpectationFalse": undefined;
    "PalletNotFound": undefined;
    "NameMismatch": undefined;
    "VersionIncompatible": undefined;
    "HoldingWouldOverflow": undefined;
    "ExportError": undefined;
    "ReanchorFailed": undefined;
    "NoDeal": undefined;
    "FeesNotMet": undefined;
    "LockError": undefined;
    "NoPermission": undefined;
    "Unanchored": undefined;
    "NotDepositable": undefined;
    "UnhandledXcmVersion": undefined;
    "WeightLimitReached": Anonymize<I4q39t5hn830vp>;
    "Barrier": undefined;
    "WeightNotComputable": undefined;
    "ExceedsStackLimit": undefined;
}>;
export declare const XcmV3TraitsError: GetEnum<XcmV3TraitsError>;
export type I137t1cld92pod = {
    "message_hash": FixedSizeBinary<32>;
};
export type If8b64mo2bodj0 = {
    "sender": number;
    "sent_at": number;
    "index": bigint;
    "required": Anonymize<I4q39t5hn830vp>;
};
export type Icu5p58ltu1veo = {
    "index": bigint;
    "used": Anonymize<I4q39t5hn830vp>;
};
export type I4r0b7tct6o9ht = AnonymousEnum<{
    /**
     * Execution of an XCM message was attempted.
     */
    "Attempted": Anonymize<Ifmqhv1oc3rh3>;
    /**
     * A XCM message was sent.
     */
    "Sent": Anonymize<Ia37keupp0t7n6>;
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    "UnexpectedResponse": Anonymize<Iel50id65eke1v>;
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    "ResponseReady": Anonymize<I9s1ksje8tscgp>;
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    "Notified": Anonymize<I2uqmls7kcdnii>;
    /**
     * Query response has been received and query is removed. The registered notification
     * could not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    "NotifyOverweight": Anonymize<Idg69klialbkb8>;
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    "NotifyDispatchError": Anonymize<I2uqmls7kcdnii>;
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    "NotifyDecodeFailed": Anonymize<I2uqmls7kcdnii>;
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    "InvalidResponder": Anonymize<I6ama1doqn7ush>;
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    "InvalidResponderVersion": Anonymize<Iel50id65eke1v>;
    /**
     * Received query response has been read and removed.
     */
    "ResponseTaken": Anonymize<I30pg328m00nr3>;
    /**
     * Some assets have been placed in an asset trap.
     */
    "AssetsTrapped": Anonymize<I2on6pi7n0k0ik>;
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     */
    "VersionChangeNotified": Anonymize<Iduq5i0c15rc0o>;
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    "SupportedVersionChanged": Anonymize<I44pbivm2pe7qc>;
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    "NotifyTargetSendFail": Anonymize<I75o78kjj6nl2u>;
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    "NotifyTargetMigrationFail": Anonymize<Ien06stpa519em>;
    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    "InvalidQuerierVersion": Anonymize<Iel50id65eke1v>;
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    "InvalidQuerier": Anonymize<I13106a549td2f>;
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    "VersionNotifyStarted": Anonymize<Icti9s23lkm0qj>;
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    "VersionNotifyRequested": Anonymize<Icti9s23lkm0qj>;
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    "VersionNotifyUnrequested": Anonymize<Icti9s23lkm0qj>;
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    "FeesPaid": Anonymize<Iemrprej97cn2e>;
    /**
     * Some assets have been claimed from an asset trap
     */
    "AssetsClaimed": Anonymize<I2on6pi7n0k0ik>;
}>;
export type Ifmqhv1oc3rh3 = {
    "outcome": Anonymize<Ib01fvb3ofrhi8>;
};
export type Ib01fvb3ofrhi8 = AnonymousEnum<{
    "Complete": Anonymize<I4q39t5hn830vp>;
    "Incomplete": [Anonymize<I4q39t5hn830vp>, XcmV3TraitsError];
    "Error": XcmV3TraitsError;
}>;
export type Ia37keupp0t7n6 = {
    "origin": Anonymize<Idpatrs8teqg2g>;
    "destination": Anonymize<Idpatrs8teqg2g>;
    "message": Anonymize<I72ak5168u17sk>;
    "message_id": FixedSizeBinary<32>;
};
export type Idpatrs8teqg2g = {
    "parents": number;
    "interior": Anonymize<I86spl6bcfm5it>;
};
export type I86spl6bcfm5it = AnonymousEnum<{
    "Here": undefined;
    "X1": Anonymize<Iaqrmqn3umgltq>;
    "X2": FixedSizeArray<2, Anonymize<Iaqrmqn3umgltq>>;
    "X3": FixedSizeArray<3, Anonymize<Iaqrmqn3umgltq>>;
    "X4": FixedSizeArray<4, Anonymize<Iaqrmqn3umgltq>>;
    "X5": FixedSizeArray<5, Anonymize<Iaqrmqn3umgltq>>;
    "X6": FixedSizeArray<6, Anonymize<Iaqrmqn3umgltq>>;
    "X7": FixedSizeArray<7, Anonymize<Iaqrmqn3umgltq>>;
    "X8": FixedSizeArray<8, Anonymize<Iaqrmqn3umgltq>>;
}>;
export type Iaqrmqn3umgltq = AnonymousEnum<{
    "Parachain": number;
    "AccountId32": {
        "network"?: Anonymize<I6l3gca91gb148>;
        "id": FixedSizeBinary<32>;
    };
    "AccountIndex64": {
        "network"?: Anonymize<I6l3gca91gb148>;
        "index": bigint;
    };
    "AccountKey20": {
        "network"?: Anonymize<I6l3gca91gb148>;
        "key": FixedSizeBinary<20>;
    };
    "PalletInstance": number;
    "GeneralIndex": bigint;
    "GeneralKey": {
        "length": number;
        "data": FixedSizeBinary<32>;
    };
    "OnlyChild": undefined;
    "Plurality": {
        "id": XcmV3JunctionBodyId;
        "part": XcmV2JunctionBodyPart;
    };
    "GlobalConsensus": Anonymize<I4k01tahcim329>;
}>;
export type I6l3gca91gb148 = (Anonymize<I4k01tahcim329>) | undefined;
export type I4k01tahcim329 = AnonymousEnum<{
    "ByGenesis": FixedSizeBinary<32>;
    "ByFork": {
        "block_number": bigint;
        "block_hash": FixedSizeBinary<32>;
    };
    "Polkadot": undefined;
    "Kusama": undefined;
    "Westend": undefined;
    "Rococo": undefined;
    "Wococo": undefined;
    "Ethereum": {
        "chain_id": bigint;
    };
    "BitcoinCore": undefined;
    "BitcoinCash": undefined;
}>;
export type XcmV3JunctionBodyId = Enum<{
    "Unit": undefined;
    "Moniker": FixedSizeBinary<4>;
    "Index": number;
    "Executive": undefined;
    "Technical": undefined;
    "Legislative": undefined;
    "Judicial": undefined;
    "Defense": undefined;
    "Administration": undefined;
    "Treasury": undefined;
}>;
export declare const XcmV3JunctionBodyId: GetEnum<XcmV3JunctionBodyId>;
export type XcmV2JunctionBodyPart = Enum<{
    "Voice": undefined;
    "Members": Anonymize<Iafscmv8tjf0ou>;
    "Fraction": {
        "nom": number;
        "denom": number;
    };
    "AtLeastProportion": {
        "nom": number;
        "denom": number;
    };
    "MoreThanProportion": {
        "nom": number;
        "denom": number;
    };
}>;
export declare const XcmV2JunctionBodyPart: GetEnum<XcmV2JunctionBodyPart>;
export type I72ak5168u17sk = Array<Enum<{
    "WithdrawAsset": Anonymize<Iboaccp6frb5e1>;
    "ReserveAssetDeposited": Anonymize<Iboaccp6frb5e1>;
    "ReceiveTeleportedAsset": Anonymize<Iboaccp6frb5e1>;
    "QueryResponse": {
        "query_id": bigint;
        "response": Anonymize<I4e56rm9p07o27>;
        "max_weight": Anonymize<I4q39t5hn830vp>;
        "querier"?: Anonymize<Ias74o62k4go4m>;
    };
    "TransferAsset": {
        "assets": Anonymize<Iboaccp6frb5e1>;
        "beneficiary": Anonymize<Idpatrs8teqg2g>;
    };
    "TransferReserveAsset": {
        "assets": Anonymize<Iboaccp6frb5e1>;
        "dest": Anonymize<Idpatrs8teqg2g>;
        "xcm": Anonymize<I72ak5168u17sk>;
    };
    "Transact": {
        "origin_kind": XcmV2OriginKind;
        "require_weight_at_most": Anonymize<I4q39t5hn830vp>;
        "call": Binary;
    };
    "HrmpNewChannelOpenRequest": Anonymize<I5uhhrjqfuo4e5>;
    "HrmpChannelAccepted": Anonymize<Ifij4jam0o7sub>;
    "HrmpChannelClosing": Anonymize<Ieeb4svd9i8fji>;
    "ClearOrigin": undefined;
    "DescendOrigin": Anonymize<I86spl6bcfm5it>;
    "ReportError": Anonymize<Ibddbsh398geer>;
    "DepositAsset": {
        "assets": Anonymize<I9enf1rh4u3kii>;
        "beneficiary": Anonymize<Idpatrs8teqg2g>;
    };
    "DepositReserveAsset": {
        "assets": Anonymize<I9enf1rh4u3kii>;
        "dest": Anonymize<Idpatrs8teqg2g>;
        "xcm": Anonymize<I72ak5168u17sk>;
    };
    "ExchangeAsset": {
        "give": Anonymize<I9enf1rh4u3kii>;
        "want": Anonymize<Iboaccp6frb5e1>;
        "maximal": boolean;
    };
    "InitiateReserveWithdraw": {
        "assets": Anonymize<I9enf1rh4u3kii>;
        "reserve": Anonymize<Idpatrs8teqg2g>;
        "xcm": Anonymize<I72ak5168u17sk>;
    };
    "InitiateTeleport": {
        "assets": Anonymize<I9enf1rh4u3kii>;
        "dest": Anonymize<Idpatrs8teqg2g>;
        "xcm": Anonymize<I72ak5168u17sk>;
    };
    "ReportHolding": {
        "response_info": Anonymize<Ibddbsh398geer>;
        "assets": Anonymize<I9enf1rh4u3kii>;
    };
    "BuyExecution": {
        "fees": Anonymize<I8pa7df789c95j>;
        "weight_limit": XcmV3WeightLimit;
    };
    "RefundSurplus": undefined;
    "SetErrorHandler": Anonymize<I72ak5168u17sk>;
    "SetAppendix": Anonymize<I72ak5168u17sk>;
    "ClearError": undefined;
    "ClaimAsset": {
        "assets": Anonymize<Iboaccp6frb5e1>;
        "ticket": Anonymize<Idpatrs8teqg2g>;
    };
    "Trap": bigint;
    "SubscribeVersion": {
        "query_id": bigint;
        "max_response_weight": Anonymize<I4q39t5hn830vp>;
    };
    "UnsubscribeVersion": undefined;
    "BurnAsset": Anonymize<Iboaccp6frb5e1>;
    "ExpectAsset": Anonymize<Iboaccp6frb5e1>;
    "ExpectOrigin"?: Anonymize<Ias74o62k4go4m>;
    "ExpectError"?: Anonymize<I7sltvf8v2nure>;
    "ExpectTransactStatus": XcmV3MaybeErrorCode;
    "QueryPallet": {
        "module_name": Binary;
        "response_info": Anonymize<Ibddbsh398geer>;
    };
    "ExpectPallet": {
        "index": number;
        "name": Binary;
        "module_name": Binary;
        "crate_major": number;
        "min_crate_minor": number;
    };
    "ReportTransactStatus": Anonymize<Ibddbsh398geer>;
    "ClearTransactStatus": undefined;
    "UniversalOrigin": Anonymize<Iaqrmqn3umgltq>;
    "ExportMessage": {
        "network": Anonymize<I4k01tahcim329>;
        "destination": Anonymize<I86spl6bcfm5it>;
        "xcm": Anonymize<I72ak5168u17sk>;
    };
    "LockAsset": {
        "asset": Anonymize<I8pa7df789c95j>;
        "unlocker": Anonymize<Idpatrs8teqg2g>;
    };
    "UnlockAsset": {
        "asset": Anonymize<I8pa7df789c95j>;
        "target": Anonymize<Idpatrs8teqg2g>;
    };
    "NoteUnlockable": {
        "asset": Anonymize<I8pa7df789c95j>;
        "owner": Anonymize<Idpatrs8teqg2g>;
    };
    "RequestUnlock": {
        "asset": Anonymize<I8pa7df789c95j>;
        "locker": Anonymize<Idpatrs8teqg2g>;
    };
    "SetFeesMode": {
        "jit_withdraw": boolean;
    };
    "SetTopic": FixedSizeBinary<32>;
    "ClearTopic": undefined;
    "AliasOrigin": Anonymize<Idpatrs8teqg2g>;
    "UnpaidExecution": {
        "weight_limit": XcmV3WeightLimit;
        "check_origin"?: Anonymize<Ias74o62k4go4m>;
    };
}>>;
export type Iboaccp6frb5e1 = Array<Anonymize<I8pa7df789c95j>>;
export type I8pa7df789c95j = {
    "id": Anonymize<Ic00osfu517iss>;
    "fun": XcmV3MultiassetFungibility;
};
export type Ic00osfu517iss = AnonymousEnum<{
    "Concrete": Anonymize<Idpatrs8teqg2g>;
    "Abstract": FixedSizeBinary<32>;
}>;
export type XcmV3MultiassetFungibility = Enum<{
    "Fungible": bigint;
    "NonFungible": XcmV3MultiassetAssetInstance;
}>;
export declare const XcmV3MultiassetFungibility: GetEnum<XcmV3MultiassetFungibility>;
export type XcmV3MultiassetAssetInstance = Enum<{
    "Undefined": undefined;
    "Index": bigint;
    "Array4": FixedSizeBinary<4>;
    "Array8": FixedSizeBinary<8>;
    "Array16": FixedSizeBinary<16>;
    "Array32": FixedSizeBinary<32>;
}>;
export declare const XcmV3MultiassetAssetInstance: GetEnum<XcmV3MultiassetAssetInstance>;
export type I4e56rm9p07o27 = AnonymousEnum<{
    "Null": undefined;
    "Assets": Anonymize<Iboaccp6frb5e1>;
    "ExecutionResult"?: Anonymize<I7sltvf8v2nure>;
    "Version": number;
    "PalletsInfo": Array<{
        "index": number;
        "name": Binary;
        "module_name": Binary;
        "major": number;
        "minor": number;
        "patch": number;
    }>;
    "DispatchResult": XcmV3MaybeErrorCode;
}>;
export type I7sltvf8v2nure = ([number, XcmV3TraitsError]) | undefined;
export type XcmV3MaybeErrorCode = Enum<{
    "Success": undefined;
    "Error": Binary;
    "TruncatedError": Binary;
}>;
export declare const XcmV3MaybeErrorCode: GetEnum<XcmV3MaybeErrorCode>;
export type Ias74o62k4go4m = (Anonymize<Idpatrs8teqg2g>) | undefined;
export type XcmV2OriginKind = Enum<{
    "Native": undefined;
    "SovereignAccount": undefined;
    "Superuser": undefined;
    "Xcm": undefined;
}>;
export declare const XcmV2OriginKind: GetEnum<XcmV2OriginKind>;
export type I5uhhrjqfuo4e5 = {
    "sender": number;
    "max_message_size": number;
    "max_capacity": number;
};
export type Ifij4jam0o7sub = {
    "recipient": number;
};
export type Ieeb4svd9i8fji = {
    "initiator": number;
    "sender": number;
    "recipient": number;
};
export type Ibddbsh398geer = {
    "destination": Anonymize<Idpatrs8teqg2g>;
    "query_id": bigint;
    "max_weight": Anonymize<I4q39t5hn830vp>;
};
export type I9enf1rh4u3kii = AnonymousEnum<{
    "Definite": Anonymize<Iboaccp6frb5e1>;
    "Wild": Enum<{
        "All": undefined;
        "AllOf": {
            "id": Anonymize<Ic00osfu517iss>;
            "fun": XcmV2MultiassetWildFungibility;
        };
        "AllCounted": number;
        "AllOfCounted": {
            "id": Anonymize<Ic00osfu517iss>;
            "fun": XcmV2MultiassetWildFungibility;
            "count": number;
        };
    }>;
}>;
export type XcmV2MultiassetWildFungibility = Enum<{
    "Fungible": undefined;
    "NonFungible": undefined;
}>;
export declare const XcmV2MultiassetWildFungibility: GetEnum<XcmV2MultiassetWildFungibility>;
export type XcmV3WeightLimit = Enum<{
    "Unlimited": undefined;
    "Limited": Anonymize<I4q39t5hn830vp>;
}>;
export declare const XcmV3WeightLimit: GetEnum<XcmV3WeightLimit>;
export type Iel50id65eke1v = {
    "origin": Anonymize<Idpatrs8teqg2g>;
    "query_id": bigint;
};
export type I9s1ksje8tscgp = {
    "query_id": bigint;
    "response": Anonymize<I4e56rm9p07o27>;
};
export type I2uqmls7kcdnii = {
    "query_id": bigint;
    "pallet_index": number;
    "call_index": number;
};
export type Idg69klialbkb8 = {
    "query_id": bigint;
    "pallet_index": number;
    "call_index": number;
    "actual_weight": Anonymize<I4q39t5hn830vp>;
    "max_budgeted_weight": Anonymize<I4q39t5hn830vp>;
};
export type I6ama1doqn7ush = {
    "origin": Anonymize<Idpatrs8teqg2g>;
    "query_id": bigint;
    "expected_location"?: Anonymize<Ias74o62k4go4m>;
};
export type I30pg328m00nr3 = {
    "query_id": bigint;
};
export type I2on6pi7n0k0ik = {
    "hash": FixedSizeBinary<32>;
    "origin": Anonymize<Idpatrs8teqg2g>;
    "assets": Anonymize<Ik93katrmbiat>;
};
export type Ik93katrmbiat = AnonymousEnum<{
    "V2": Anonymize<I2sllmucln1iic>;
    "V3": Anonymize<Iboaccp6frb5e1>;
}>;
export type I2sllmucln1iic = Array<Anonymize<Id8h647t880l31>>;
export type Id8h647t880l31 = {
    "id": XcmV2MultiassetAssetId;
    "fun": XcmV2MultiassetFungibility;
};
export type XcmV2MultiassetAssetId = Enum<{
    "Concrete": Anonymize<I4frqunb5hj2km>;
    "Abstract": Binary;
}>;
export declare const XcmV2MultiassetAssetId: GetEnum<XcmV2MultiassetAssetId>;
export type I4frqunb5hj2km = {
    "parents": number;
    "interior": XcmV2MultilocationJunctions;
};
export type XcmV2MultilocationJunctions = Enum<{
    "Here": undefined;
    "X1": XcmV2Junction;
    "X2": FixedSizeArray<2, XcmV2Junction>;
    "X3": FixedSizeArray<3, XcmV2Junction>;
    "X4": FixedSizeArray<4, XcmV2Junction>;
    "X5": FixedSizeArray<5, XcmV2Junction>;
    "X6": FixedSizeArray<6, XcmV2Junction>;
    "X7": FixedSizeArray<7, XcmV2Junction>;
    "X8": FixedSizeArray<8, XcmV2Junction>;
}>;
export declare const XcmV2MultilocationJunctions: GetEnum<XcmV2MultilocationJunctions>;
export type XcmV2Junction = Enum<{
    "Parachain": number;
    "AccountId32": {
        "network": XcmV2NetworkId;
        "id": FixedSizeBinary<32>;
    };
    "AccountIndex64": {
        "network": XcmV2NetworkId;
        "index": bigint;
    };
    "AccountKey20": {
        "network": XcmV2NetworkId;
        "key": FixedSizeBinary<20>;
    };
    "PalletInstance": number;
    "GeneralIndex": bigint;
    "GeneralKey": Binary;
    "OnlyChild": undefined;
    "Plurality": {
        "id": XcmV2BodyId;
        "part": XcmV2JunctionBodyPart;
    };
}>;
export declare const XcmV2Junction: GetEnum<XcmV2Junction>;
export type XcmV2NetworkId = Enum<{
    "Any": undefined;
    "Named": Binary;
    "Polkadot": undefined;
    "Kusama": undefined;
}>;
export declare const XcmV2NetworkId: GetEnum<XcmV2NetworkId>;
export type XcmV2BodyId = Enum<{
    "Unit": undefined;
    "Named": Binary;
    "Index": number;
    "Executive": undefined;
    "Technical": undefined;
    "Legislative": undefined;
    "Judicial": undefined;
    "Defense": undefined;
    "Administration": undefined;
    "Treasury": undefined;
}>;
export declare const XcmV2BodyId: GetEnum<XcmV2BodyId>;
export type XcmV2MultiassetFungibility = Enum<{
    "Fungible": bigint;
    "NonFungible": XcmV2MultiassetAssetInstance;
}>;
export declare const XcmV2MultiassetFungibility: GetEnum<XcmV2MultiassetFungibility>;
export type XcmV2MultiassetAssetInstance = Enum<{
    "Undefined": undefined;
    "Index": bigint;
    "Array4": FixedSizeBinary<4>;
    "Array8": FixedSizeBinary<8>;
    "Array16": FixedSizeBinary<16>;
    "Array32": FixedSizeBinary<32>;
    "Blob": Binary;
}>;
export declare const XcmV2MultiassetAssetInstance: GetEnum<XcmV2MultiassetAssetInstance>;
export type Iduq5i0c15rc0o = {
    "destination": Anonymize<Idpatrs8teqg2g>;
    "result": number;
    "cost": Anonymize<Iboaccp6frb5e1>;
    "message_id": FixedSizeBinary<32>;
};
export type I44pbivm2pe7qc = {
    "location": Anonymize<Idpatrs8teqg2g>;
    "version": number;
};
export type I75o78kjj6nl2u = {
    "location": Anonymize<Idpatrs8teqg2g>;
    "query_id": bigint;
    "error": XcmV3TraitsError;
};
export type Ien06stpa519em = {
    "location": Anonymize<Idbg08q7edq40c>;
    "query_id": bigint;
};
export type Idbg08q7edq40c = AnonymousEnum<{
    "V2": Anonymize<I4frqunb5hj2km>;
    "V3": Anonymize<Idpatrs8teqg2g>;
}>;
export type I13106a549td2f = {
    "origin": Anonymize<Idpatrs8teqg2g>;
    "query_id": bigint;
    "expected_querier": Anonymize<Idpatrs8teqg2g>;
    "maybe_actual_querier"?: Anonymize<Ias74o62k4go4m>;
};
export type Icti9s23lkm0qj = {
    "destination": Anonymize<Idpatrs8teqg2g>;
    "cost": Anonymize<Iboaccp6frb5e1>;
    "message_id": FixedSizeBinary<32>;
};
export type Iemrprej97cn2e = {
    "paying": Anonymize<Idpatrs8teqg2g>;
    "fees": Anonymize<Iboaccp6frb5e1>;
};
export type I4f9jlfai43i7r = AnonymousEnum<{
    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    "InvalidFormat": FixedSizeBinary<32>;
    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    "UnsupportedVersion": FixedSizeBinary<32>;
    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    "ExecutedDownward": Anonymize<I2c8bkmorso999>;
}>;
export type I2c8bkmorso999 = [FixedSizeBinary<32>, Anonymize<Ib01fvb3ofrhi8>];
export type I5s7k7819l2j41 = AnonymousEnum<{
    /**
     * Downward message is invalid XCM.
     */
    "InvalidFormat": Anonymize<I137t1cld92pod>;
    /**
     * Downward message is unsupported version of XCM.
     */
    "UnsupportedVersion": Anonymize<I137t1cld92pod>;
    /**
     * Downward message executed with the given outcome.
     */
    "ExecutedDownward": Anonymize<I2gfpd8ikmku31>;
    /**
     * The weight limit for handling downward messages was reached.
     */
    "WeightExhausted": Anonymize<Iadf1uv6agh6rp>;
    /**
     * Downward message is overweight and was placed in the overweight queue.
     */
    "OverweightEnqueued": Anonymize<If4e6jvgfn13rl>;
    /**
     * Downward message from the overweight queue was executed.
     */
    "OverweightServiced": Anonymize<Ise9gq7rqlnvm>;
    /**
     * The maximum number of downward messages was reached.
     */
    "MaxMessagesExhausted": Anonymize<I137t1cld92pod>;
}>;
export type I2gfpd8ikmku31 = {
    "message_hash": FixedSizeBinary<32>;
    "message_id": FixedSizeBinary<32>;
    "outcome": Anonymize<Ib01fvb3ofrhi8>;
};
export type Iadf1uv6agh6rp = {
    "message_hash": FixedSizeBinary<32>;
    "message_id": FixedSizeBinary<32>;
    "remaining_weight": Anonymize<I4q39t5hn830vp>;
    "required_weight": Anonymize<I4q39t5hn830vp>;
};
export type If4e6jvgfn13rl = {
    "message_hash": FixedSizeBinary<32>;
    "message_id": FixedSizeBinary<32>;
    "overweight_index": bigint;
    "required_weight": Anonymize<I4q39t5hn830vp>;
};
export type Ise9gq7rqlnvm = {
    "overweight_index": bigint;
    "weight_used": Anonymize<I4q39t5hn830vp>;
};
export type I6587eoal236ul = AnonymousEnum<{
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    "BatchInterrupted": Anonymize<I36a1f0tvpm2vl>;
    /**
     * Batch of dispatches completed fully with no error.
     */
    "BatchCompleted": undefined;
    /**
     * Batch of dispatches completed but has errors.
     */
    "BatchCompletedWithErrors": undefined;
    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    "ItemCompleted": undefined;
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    "ItemFailed": Anonymize<I4u5n3f2atceoo>;
    /**
     * A call was dispatched.
     */
    "DispatchedAs": Anonymize<Ib9umvo53pgk1d>;
}>;
export type I36a1f0tvpm2vl = {
    "index": number;
    "error": Anonymize<I55o1f0t1icsot>;
};
export type I4u5n3f2atceoo = {
    "error": Anonymize<I55o1f0t1icsot>;
};
export type Ib9umvo53pgk1d = {
    "result": Anonymize<I5fusjs43lh8e6>;
};
export type I5fusjs43lh8e6 = ResultPayload<undefined, Anonymize<I55o1f0t1icsot>>;
export type I11d9rom6oq3lr = AnonymousEnum<{
    /**
     * A new multisig operation has begun.
     */
    "NewMultisig": Anonymize<Iep27ialq4a7o7>;
    /**
     * A multisig operation has been approved by someone.
     */
    "MultisigApproval": Anonymize<Iasu5jvoqr43mv>;
    /**
     * A multisig operation has been executed.
     */
    "MultisigExecuted": Anonymize<Ib1v1gumfn2q1t>;
    /**
     * A multisig operation has been cancelled.
     */
    "MultisigCancelled": Anonymize<I5qolde99acmd1>;
}>;
export type Iep27ialq4a7o7 = {
    "approving": SS58String;
    "multisig": SS58String;
    "call_hash": FixedSizeBinary<32>;
};
export type Iasu5jvoqr43mv = {
    "approving": SS58String;
    "timepoint": Anonymize<Itvprrpb0nm3o>;
    "multisig": SS58String;
    "call_hash": FixedSizeBinary<32>;
};
export type Itvprrpb0nm3o = {
    "height": number;
    "index": number;
};
export type Ib1v1gumfn2q1t = {
    "approving": SS58String;
    "timepoint": Anonymize<Itvprrpb0nm3o>;
    "multisig": SS58String;
    "call_hash": FixedSizeBinary<32>;
    "result": Anonymize<I5fusjs43lh8e6>;
};
export type I5qolde99acmd1 = {
    "cancelling": SS58String;
    "timepoint": Anonymize<Itvprrpb0nm3o>;
    "multisig": SS58String;
    "call_hash": FixedSizeBinary<32>;
};
export type I7i68upu5tto4d = AnonymousEnum<{
    /**
     * A proxy was executed correctly, with the given.
     */
    "ProxyExecuted": Anonymize<Ib9umvo53pgk1d>;
    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    "PureCreated": Anonymize<Ie7cuj84ohvg56>;
    /**
     * An announcement was placed to make a call in the future.
     */
    "Announced": Anonymize<I2ur0oeqg495j8>;
    /**
     * A proxy was added.
     */
    "ProxyAdded": Anonymize<I8ioopvokvl3ud>;
    /**
     * A proxy was removed.
     */
    "ProxyRemoved": Anonymize<I8ioopvokvl3ud>;
}>;
export type Ie7cuj84ohvg56 = {
    "pure": SS58String;
    "who": SS58String;
    "proxy_type": Anonymize<I5ftepkjop3g1u>;
    "disambiguation_index": number;
};
export type I5ftepkjop3g1u = AnonymousEnum<{
    "Any": undefined;
    "NonTransfer": undefined;
    "CancelProxy": undefined;
    "Assets": undefined;
    "AssetOwner": undefined;
    "AssetManager": undefined;
    "Collator": undefined;
}>;
export type I2ur0oeqg495j8 = {
    "real": SS58String;
    "proxy": SS58String;
    "call_hash": FixedSizeBinary<32>;
};
export type I8ioopvokvl3ud = {
    "delegator": SS58String;
    "delegatee": SS58String;
    "proxy_type": Anonymize<I5ftepkjop3g1u>;
    "delay": number;
};
export type Ie4o50pgs5mq4e = AnonymousEnum<{
    /**
     * Some asset class was created.
     */
    "Created": Anonymize<I88ff3u4dpivk>;
    /**
     * Some assets were issued.
     */
    "Issued": Anonymize<I33cp947glv1ks>;
    /**
     * Some assets were transferred.
     */
    "Transferred": Anonymize<Ic9om1gmmqu7rq>;
    /**
     * Some assets were destroyed.
     */
    "Burned": Anonymize<I5hfov2b68ppb6>;
    /**
     * The management team changed.
     */
    "TeamChanged": Anonymize<Ibthhb2m9vneds>;
    /**
     * The owner changed.
     */
    "OwnerChanged": Anonymize<Iaitn5bqfacj7k>;
    /**
     * Some account `who` was frozen.
     */
    "Frozen": Anonymize<If4ebvclj2ugvi>;
    /**
     * Some account `who` was thawed.
     */
    "Thawed": Anonymize<If4ebvclj2ugvi>;
    /**
     * Some asset `asset_id` was frozen.
     */
    "AssetFrozen": Anonymize<Ia5le7udkgbaq9>;
    /**
     * Some asset `asset_id` was thawed.
     */
    "AssetThawed": Anonymize<Ia5le7udkgbaq9>;
    /**
     * Accounts were destroyed for given asset.
     */
    "AccountsDestroyed": Anonymize<Ieduc1e6frq8rb>;
    /**
     * Approvals were destroyed for given asset.
     */
    "ApprovalsDestroyed": Anonymize<I9h6gbtabovtm4>;
    /**
     * An asset class is in the process of being destroyed.
     */
    "DestructionStarted": Anonymize<Ia5le7udkgbaq9>;
    /**
     * An asset class was destroyed.
     */
    "Destroyed": Anonymize<Ia5le7udkgbaq9>;
    /**
     * Some asset class was force-created.
     */
    "ForceCreated": Anonymize<Iaitn5bqfacj7k>;
    /**
     * New metadata has been set for an asset.
     */
    "MetadataSet": Anonymize<Ifnsa0dkkpf465>;
    /**
     * Metadata has been cleared for an asset.
     */
    "MetadataCleared": Anonymize<Ia5le7udkgbaq9>;
    /**
     * (Additional) funds have been approved for transfer to a destination account.
     */
    "ApprovedTransfer": Anonymize<I65dtqr2egjbc3>;
    /**
     * An approval for account `delegate` was cancelled by `owner`.
     */
    "ApprovalCancelled": Anonymize<Ibqj3vg5s5lk0c>;
    /**
     * An `amount` was transferred in its entirety from `owner` to `destination` by
     * the approved `delegate`.
     */
    "TransferredApproved": Anonymize<I6l73u513p8rna>;
    /**
     * An asset has had its attributes changed by the `Force` origin.
     */
    "AssetStatusChanged": Anonymize<Ia5le7udkgbaq9>;
    /**
     * The min_balance of an asset has been updated by the asset owner.
     */
    "AssetMinBalanceChanged": Anonymize<Iefqmt2htu1dlu>;
    /**
     * Some account `who` was created with a deposit from `depositor`.
     */
    "Touched": Anonymize<If8bgtgqrchjtu>;
    /**
     * Some account `who` was blocked.
     */
    "Blocked": Anonymize<If4ebvclj2ugvi>;
}>;
export type I88ff3u4dpivk = {
    "asset_id": number;
    "creator": SS58String;
    "owner": SS58String;
};
export type I33cp947glv1ks = {
    "asset_id": number;
    "owner": SS58String;
    "amount": bigint;
};
export type Ic9om1gmmqu7rq = {
    "asset_id": number;
    "from": SS58String;
    "to": SS58String;
    "amount": bigint;
};
export type I5hfov2b68ppb6 = {
    "asset_id": number;
    "owner": SS58String;
    "balance": bigint;
};
export type Ibthhb2m9vneds = {
    "asset_id": number;
    "issuer": SS58String;
    "admin": SS58String;
    "freezer": SS58String;
};
export type Iaitn5bqfacj7k = {
    "asset_id": number;
    "owner": SS58String;
};
export type If4ebvclj2ugvi = {
    "asset_id": number;
    "who": SS58String;
};
export type Ia5le7udkgbaq9 = {
    "asset_id": number;
};
export type Ieduc1e6frq8rb = {
    "asset_id": number;
    "accounts_destroyed": number;
    "accounts_remaining": number;
};
export type I9h6gbtabovtm4 = {
    "asset_id": number;
    "approvals_destroyed": number;
    "approvals_remaining": number;
};
export type Ifnsa0dkkpf465 = {
    "asset_id": number;
    "name": Binary;
    "symbol": Binary;
    "decimals": number;
    "is_frozen": boolean;
};
export type I65dtqr2egjbc3 = {
    "asset_id": number;
    "source": SS58String;
    "delegate": SS58String;
    "amount": bigint;
};
export type Ibqj3vg5s5lk0c = {
    "asset_id": number;
    "owner": SS58String;
    "delegate": SS58String;
};
export type I6l73u513p8rna = {
    "asset_id": number;
    "owner": SS58String;
    "delegate": SS58String;
    "destination": SS58String;
    "amount": bigint;
};
export type Iefqmt2htu1dlu = {
    "asset_id": number;
    "new_min_balance": bigint;
};
export type If8bgtgqrchjtu = {
    "asset_id": number;
    "who": SS58String;
    "depositor": SS58String;
};
export type Ia0j71vjrjqu9p = AnonymousEnum<{
    /**
     * A `collection` was created.
     */
    "Created": Anonymize<I9gqanbbbe917p>;
    /**
     * A `collection` was force-created.
     */
    "ForceCreated": Anonymize<Id1m1230297f7a>;
    /**
     * A `collection` was destroyed.
     */
    "Destroyed": Anonymize<I6cu7obfo0rr0o>;
    /**
     * An `item` was issued.
     */
    "Issued": Anonymize<Ifvb1p5munhhv4>;
    /**
     * An `item` was transferred.
     */
    "Transferred": Anonymize<I46h83ilqeed3g>;
    /**
     * An `item` was destroyed.
     */
    "Burned": Anonymize<Ifvb1p5munhhv4>;
    /**
     * Some `item` was frozen.
     */
    "Frozen": Anonymize<Iafkqus0ohh6l6>;
    /**
     * Some `item` was thawed.
     */
    "Thawed": Anonymize<Iafkqus0ohh6l6>;
    /**
     * Some `collection` was frozen.
     */
    "CollectionFrozen": Anonymize<I6cu7obfo0rr0o>;
    /**
     * Some `collection` was thawed.
     */
    "CollectionThawed": Anonymize<I6cu7obfo0rr0o>;
    /**
     * The owner changed.
     */
    "OwnerChanged": Anonymize<Icahse3uoi76n7>;
    /**
     * The management team changed.
     */
    "TeamChanged": Anonymize<I75sj3uv7gnemk>;
    /**
     * An `item` of a `collection` has been approved by the `owner` for transfer by
     * a `delegate`.
     */
    "ApprovedTransfer": Anonymize<I5fjkvcb5vr6nb>;
    /**
     * An approval for a `delegate` account to transfer the `item` of an item
     * `collection` was cancelled by its `owner`.
     */
    "ApprovalCancelled": Anonymize<I5fjkvcb5vr6nb>;
    /**
     * A `collection` has had its attributes changed by the `Force` origin.
     */
    "ItemStatusChanged": Anonymize<I6cu7obfo0rr0o>;
    /**
     * New metadata has been set for a `collection`.
     */
    "CollectionMetadataSet": Anonymize<I9viqhmdtuof5e>;
    /**
     * Metadata has been cleared for a `collection`.
     */
    "CollectionMetadataCleared": Anonymize<I6cu7obfo0rr0o>;
    /**
     * New metadata has been set for an item.
     */
    "MetadataSet": Anonymize<Iceq9fmmp9aeqv>;
    /**
     * Metadata has been cleared for an item.
     */
    "MetadataCleared": Anonymize<Iafkqus0ohh6l6>;
    /**
     * Metadata has been cleared for an item.
     */
    "Redeposited": Anonymize<I2gr1toekv86b9>;
    /**
     * New attribute metadata has been set for a `collection` or `item`.
     */
    "AttributeSet": Anonymize<I5tvvgui05tn6e>;
    /**
     * Attribute metadata has been cleared for a `collection` or `item`.
     */
    "AttributeCleared": Anonymize<Ibal0joadvdc2h>;
    /**
     * Ownership acceptance has changed for an account.
     */
    "OwnershipAcceptanceChanged": Anonymize<I2v2ikqt2trp52>;
    /**
     * Max supply has been set for a collection.
     */
    "CollectionMaxSupplySet": Anonymize<I6h88h8vba22v8>;
    /**
     * The price was set for the instance.
     */
    "ItemPriceSet": Anonymize<If3057hi1g5qlo>;
    /**
     * The price for the instance was removed.
     */
    "ItemPriceRemoved": Anonymize<Iafkqus0ohh6l6>;
    /**
     * An item was bought.
     */
    "ItemBought": Anonymize<Iaii5qf41d5n3d>;
}>;
export type I9gqanbbbe917p = {
    "collection": number;
    "creator": SS58String;
    "owner": SS58String;
};
export type Id1m1230297f7a = {
    "collection": number;
    "owner": SS58String;
};
export type I6cu7obfo0rr0o = {
    "collection": number;
};
export type Ifvb1p5munhhv4 = {
    "collection": number;
    "item": number;
    "owner": SS58String;
};
export type I46h83ilqeed3g = {
    "collection": number;
    "item": number;
    "from": SS58String;
    "to": SS58String;
};
export type Iafkqus0ohh6l6 = {
    "collection": number;
    "item": number;
};
export type Icahse3uoi76n7 = {
    "collection": number;
    "new_owner": SS58String;
};
export type I75sj3uv7gnemk = {
    "collection": number;
    "issuer": SS58String;
    "admin": SS58String;
    "freezer": SS58String;
};
export type I5fjkvcb5vr6nb = {
    "collection": number;
    "item": number;
    "owner": SS58String;
    "delegate": SS58String;
};
export type I9viqhmdtuof5e = {
    "collection": number;
    "data": Binary;
    "is_frozen": boolean;
};
export type Iceq9fmmp9aeqv = {
    "collection": number;
    "item": number;
    "data": Binary;
    "is_frozen": boolean;
};
export type I2gr1toekv86b9 = {
    "collection": number;
    "successful_items": Anonymize<Icgljjb6j82uhn>;
};
export type Icgljjb6j82uhn = Array<number>;
export type I5tvvgui05tn6e = {
    "collection": number;
    "maybe_item"?: Anonymize<I4arjljr6dpflb>;
    "key": Binary;
    "value": Binary;
};
export type Ibal0joadvdc2h = {
    "collection": number;
    "maybe_item"?: Anonymize<I4arjljr6dpflb>;
    "key": Binary;
};
export type I2v2ikqt2trp52 = {
    "who": SS58String;
    "maybe_collection"?: Anonymize<I4arjljr6dpflb>;
};
export type I6h88h8vba22v8 = {
    "collection": number;
    "max_supply": number;
};
export type If3057hi1g5qlo = {
    "collection": number;
    "item": number;
    "price": bigint;
    "whitelisted_buyer"?: Anonymize<Ihfphjolmsqq1>;
};
export type Ihfphjolmsqq1 = (SS58String) | undefined;
export type Iaii5qf41d5n3d = {
    "collection": number;
    "item": number;
    "price": bigint;
    "seller": SS58String;
    "buyer": SS58String;
};
export type I6qicn8jn4fftj = AnonymousEnum<{
    /**
     * A `collection` was created.
     */
    "Created": Anonymize<I9gqanbbbe917p>;
    /**
     * A `collection` was force-created.
     */
    "ForceCreated": Anonymize<Id1m1230297f7a>;
    /**
     * A `collection` was destroyed.
     */
    "Destroyed": Anonymize<I6cu7obfo0rr0o>;
    /**
     * An `item` was issued.
     */
    "Issued": Anonymize<Ifvb1p5munhhv4>;
    /**
     * An `item` was transferred.
     */
    "Transferred": Anonymize<I46h83ilqeed3g>;
    /**
     * An `item` was destroyed.
     */
    "Burned": Anonymize<Ifvb1p5munhhv4>;
    /**
     * An `item` became non-transferable.
     */
    "ItemTransferLocked": Anonymize<Iafkqus0ohh6l6>;
    /**
     * An `item` became transferable.
     */
    "ItemTransferUnlocked": Anonymize<Iafkqus0ohh6l6>;
    /**
     * `item` metadata or attributes were locked.
     */
    "ItemPropertiesLocked": Anonymize<I1jj31tn29ie3c>;
    /**
     * Some `collection` was locked.
     */
    "CollectionLocked": Anonymize<I6cu7obfo0rr0o>;
    /**
     * The owner changed.
     */
    "OwnerChanged": Anonymize<Icahse3uoi76n7>;
    /**
     * The management team changed.
     */
    "TeamChanged": Anonymize<Ico8bnjc6taa27>;
    /**
     * An `item` of a `collection` has been approved by the `owner` for transfer by
     * a `delegate`.
     */
    "TransferApproved": Anonymize<I78i1bvlonei69>;
    /**
     * An approval for a `delegate` account to transfer the `item` of an item
     * `collection` was cancelled by its `owner`.
     */
    "ApprovalCancelled": Anonymize<I5fjkvcb5vr6nb>;
    /**
     * All approvals of an item got cancelled.
     */
    "AllApprovalsCancelled": Anonymize<Ifvb1p5munhhv4>;
    /**
     * A `collection` has had its config changed by the `Force` origin.
     */
    "CollectionConfigChanged": Anonymize<I6cu7obfo0rr0o>;
    /**
     * New metadata has been set for a `collection`.
     */
    "CollectionMetadataSet": Anonymize<I78u60nqh0etah>;
    /**
     * Metadata has been cleared for a `collection`.
     */
    "CollectionMetadataCleared": Anonymize<I6cu7obfo0rr0o>;
    /**
     * New metadata has been set for an item.
     */
    "ItemMetadataSet": Anonymize<Icrkms46uh8tpb>;
    /**
     * Metadata has been cleared for an item.
     */
    "ItemMetadataCleared": Anonymize<Iafkqus0ohh6l6>;
    /**
     * The deposit for a set of `item`s within a `collection` has been updated.
     */
    "Redeposited": Anonymize<I2gr1toekv86b9>;
    /**
     * New attribute metadata has been set for a `collection` or `item`.
     */
    "AttributeSet": Anonymize<I5llu6o6a0go5i>;
    /**
     * Attribute metadata has been cleared for a `collection` or `item`.
     */
    "AttributeCleared": Anonymize<I93r2effh7od84>;
    /**
     * A new approval to modify item attributes was added.
     */
    "ItemAttributesApprovalAdded": Anonymize<I9i1f9mrso1hmf>;
    /**
     * A new approval to modify item attributes was removed.
     */
    "ItemAttributesApprovalRemoved": Anonymize<I9i1f9mrso1hmf>;
    /**
     * Ownership acceptance has changed for an account.
     */
    "OwnershipAcceptanceChanged": Anonymize<I2v2ikqt2trp52>;
    /**
     * Max supply has been set for a collection.
     */
    "CollectionMaxSupplySet": Anonymize<I6h88h8vba22v8>;
    /**
     * Mint settings for a collection had changed.
     */
    "CollectionMintSettingsUpdated": Anonymize<I6cu7obfo0rr0o>;
    /**
     * Event gets emitted when the `NextCollectionId` gets incremented.
     */
    "NextCollectionIdIncremented": Anonymize<I9ksla2si91s56>;
    /**
     * The price was set for the item.
     */
    "ItemPriceSet": Anonymize<If3057hi1g5qlo>;
    /**
     * The price for the item was removed.
     */
    "ItemPriceRemoved": Anonymize<Iafkqus0ohh6l6>;
    /**
     * An item was bought.
     */
    "ItemBought": Anonymize<Iaii5qf41d5n3d>;
    /**
     * A tip was sent.
     */
    "TipSent": Anonymize<Id9j7b85otvjru>;
    /**
     * An `item` swap intent was created.
     */
    "SwapCreated": Anonymize<Iaihk9pek2ajl9>;
    /**
     * The swap was cancelled.
     */
    "SwapCancelled": Anonymize<Iaihk9pek2ajl9>;
    /**
     * The swap has been claimed.
     */
    "SwapClaimed": Anonymize<Id9av23h47ufb2>;
    /**
     * New attributes have been set for an `item` of the `collection`.
     */
    "PreSignedAttributesSet": Anonymize<Ib4kpnijas4jqp>;
    /**
     * A new attribute in the `Pallet` namespace was set for the `collection` or an `item`
     * within that `collection`.
     */
    "PalletAttributeSet": Anonymize<I2vnu5k0u1i65h>;
}>;
export type I1jj31tn29ie3c = {
    "collection": number;
    "item": number;
    "lock_metadata": boolean;
    "lock_attributes": boolean;
};
export type Ico8bnjc6taa27 = {
    "collection": number;
    "issuer"?: Anonymize<Ihfphjolmsqq1>;
    "admin"?: Anonymize<Ihfphjolmsqq1>;
    "freezer"?: Anonymize<Ihfphjolmsqq1>;
};
export type I78i1bvlonei69 = {
    "collection": number;
    "item": number;
    "owner": SS58String;
    "delegate": SS58String;
    "deadline"?: Anonymize<I4arjljr6dpflb>;
};
export type I78u60nqh0etah = {
    "collection": number;
    "data": Binary;
};
export type Icrkms46uh8tpb = {
    "collection": number;
    "item": number;
    "data": Binary;
};
export type I5llu6o6a0go5i = {
    "collection": number;
    "maybe_item"?: Anonymize<I4arjljr6dpflb>;
    "key": Binary;
    "value": Binary;
    "namespace": Anonymize<If3jjadhmug6qc>;
};
export type If3jjadhmug6qc = AnonymousEnum<{
    "Pallet": undefined;
    "CollectionOwner": undefined;
    "ItemOwner": undefined;
    "Account": SS58String;
}>;
export type I93r2effh7od84 = {
    "collection": number;
    "maybe_item"?: Anonymize<I4arjljr6dpflb>;
    "key": Binary;
    "namespace": Anonymize<If3jjadhmug6qc>;
};
export type I9i1f9mrso1hmf = {
    "collection": number;
    "item": number;
    "delegate": SS58String;
};
export type I9ksla2si91s56 = {
    "next_id"?: Anonymize<I4arjljr6dpflb>;
};
export type Id9j7b85otvjru = {
    "collection": number;
    "item": number;
    "sender": SS58String;
    "receiver": SS58String;
    "amount": bigint;
};
export type Iaihk9pek2ajl9 = {
    "offered_collection": number;
    "offered_item": number;
    "desired_collection": number;
    "desired_item"?: Anonymize<I4arjljr6dpflb>;
    "price"?: Anonymize<I6oogc1jbmmi81>;
    "deadline": number;
};
export type I6oogc1jbmmi81 = ({
    "amount": bigint;
    "direction": Enum<{
        "Send": undefined;
        "Receive": undefined;
    }>;
}) | undefined;
export type Id9av23h47ufb2 = {
    "sent_collection": number;
    "sent_item": number;
    "sent_item_owner": SS58String;
    "received_collection": number;
    "received_item": number;
    "received_item_owner": SS58String;
    "price"?: Anonymize<I6oogc1jbmmi81>;
    "deadline": number;
};
export type Ib4kpnijas4jqp = {
    "collection": number;
    "item": number;
    "namespace": Anonymize<If3jjadhmug6qc>;
};
export type I2vnu5k0u1i65h = {
    "collection": number;
    "item"?: Anonymize<I4arjljr6dpflb>;
    "attribute": Enum<{
        "UsedToClaim": number;
        "TransferDisabled": undefined;
    }>;
    "value": Binary;
};
export type Id6v2u1eq6bj9n = AnonymousEnum<{
    /**
     * Some asset class was created.
     */
    "Created": Anonymize<Iecal8oi5f04ge>;
    /**
     * Some assets were issued.
     */
    "Issued": Anonymize<Ic05ktr2oct1nn>;
    /**
     * Some assets were transferred.
     */
    "Transferred": Anonymize<Ickf73l1j0hdnb>;
    /**
     * Some assets were destroyed.
     */
    "Burned": Anonymize<Idet6j426d5cht>;
    /**
     * The management team changed.
     */
    "TeamChanged": Anonymize<I40a0s39fbkvmt>;
    /**
     * The owner changed.
     */
    "OwnerChanged": Anonymize<I82eq5jun2ru6g>;
    /**
     * Some account `who` was frozen.
     */
    "Frozen": Anonymize<Iff9hjdvtonbq4>;
    /**
     * Some account `who` was thawed.
     */
    "Thawed": Anonymize<Iff9hjdvtonbq4>;
    /**
     * Some asset `asset_id` was frozen.
     */
    "AssetFrozen": Anonymize<I6liad1b2v1j3a>;
    /**
     * Some asset `asset_id` was thawed.
     */
    "AssetThawed": Anonymize<I6liad1b2v1j3a>;
    /**
     * Accounts were destroyed for given asset.
     */
    "AccountsDestroyed": Anonymize<I9h5hjufd36pl5>;
    /**
     * Approvals were destroyed for given asset.
     */
    "ApprovalsDestroyed": Anonymize<I3tc6ks4ntde0e>;
    /**
     * An asset class is in the process of being destroyed.
     */
    "DestructionStarted": Anonymize<I6liad1b2v1j3a>;
    /**
     * An asset class was destroyed.
     */
    "Destroyed": Anonymize<I6liad1b2v1j3a>;
    /**
     * Some asset class was force-created.
     */
    "ForceCreated": Anonymize<I82eq5jun2ru6g>;
    /**
     * New metadata has been set for an asset.
     */
    "MetadataSet": Anonymize<Ift3nn9q4s5dc6>;
    /**
     * Metadata has been cleared for an asset.
     */
    "MetadataCleared": Anonymize<I6liad1b2v1j3a>;
    /**
     * (Additional) funds have been approved for transfer to a destination account.
     */
    "ApprovedTransfer": Anonymize<I9ll5ddutb9ikt>;
    /**
     * An approval for account `delegate` was cancelled by `owner`.
     */
    "ApprovalCancelled": Anonymize<I304o4std85kum>;
    /**
     * An `amount` was transferred in its entirety from `owner` to `destination` by
     * the approved `delegate`.
     */
    "TransferredApproved": Anonymize<I867k91d2log1e>;
    /**
     * An asset has had its attributes changed by the `Force` origin.
     */
    "AssetStatusChanged": Anonymize<I6liad1b2v1j3a>;
    /**
     * The min_balance of an asset has been updated by the asset owner.
     */
    "AssetMinBalanceChanged": Anonymize<Ica75ao8v192b0>;
    /**
     * Some account `who` was created with a deposit from `depositor`.
     */
    "Touched": Anonymize<Ie3uql8p3fhpub>;
    /**
     * Some account `who` was blocked.
     */
    "Blocked": Anonymize<Iff9hjdvtonbq4>;
}>;
export type Iecal8oi5f04ge = {
    "asset_id": Anonymize<Idpatrs8teqg2g>;
    "creator": SS58String;
    "owner": SS58String;
};
export type Ic05ktr2oct1nn = {
    "asset_id": Anonymize<Idpatrs8teqg2g>;
    "owner": SS58String;
    "amount": bigint;
};
export type Ickf73l1j0hdnb = {
    "asset_id": Anonymize<Idpatrs8teqg2g>;
    "from": SS58String;
    "to": SS58String;
    "amount": bigint;
};
export type Idet6j426d5cht = {
    "asset_id": Anonymize<Idpatrs8teqg2g>;
    "owner": SS58String;
    "balance": bigint;
};
export type I40a0s39fbkvmt = {
    "asset_id": Anonymize<Idpatrs8teqg2g>;
    "issuer": SS58String;
    "admin": SS58String;
    "freezer": SS58String;
};
export type I82eq5jun2ru6g = {
    "asset_id": Anonymize<Idpatrs8teqg2g>;
    "owner": SS58String;
};
export type Iff9hjdvtonbq4 = {
    "asset_id": Anonymize<Idpatrs8teqg2g>;
    "who": SS58String;
};
export type I6liad1b2v1j3a = {
    "asset_id": Anonymize<Idpatrs8teqg2g>;
};
export type I9h5hjufd36pl5 = {
    "asset_id": Anonymize<Idpatrs8teqg2g>;
    "accounts_destroyed": number;
    "accounts_remaining": number;
};
export type I3tc6ks4ntde0e = {
    "asset_id": Anonymize<Idpatrs8teqg2g>;
    "approvals_destroyed": number;
    "approvals_remaining": number;
};
export type Ift3nn9q4s5dc6 = {
    "asset_id": Anonymize<Idpatrs8teqg2g>;
    "name": Binary;
    "symbol": Binary;
    "decimals": number;
    "is_frozen": boolean;
};
export type I9ll5ddutb9ikt = {
    "asset_id": Anonymize<Idpatrs8teqg2g>;
    "source": SS58String;
    "delegate": SS58String;
    "amount": bigint;
};
export type I304o4std85kum = {
    "asset_id": Anonymize<Idpatrs8teqg2g>;
    "owner": SS58String;
    "delegate": SS58String;
};
export type I867k91d2log1e = {
    "asset_id": Anonymize<Idpatrs8teqg2g>;
    "owner": SS58String;
    "delegate": SS58String;
    "destination": SS58String;
    "amount": bigint;
};
export type Ica75ao8v192b0 = {
    "asset_id": Anonymize<Idpatrs8teqg2g>;
    "new_min_balance": bigint;
};
export type Ie3uql8p3fhpub = {
    "asset_id": Anonymize<Idpatrs8teqg2g>;
    "who": SS58String;
    "depositor": SS58String;
};
export type Ic5m5lp1oioo8r = Array<FixedSizeBinary<32>>;
export type I95g6i7ilua7lq = Array<Anonymize<I9jd27rnpm8ttv>>;
export type I9jd27rnpm8ttv = FixedSizeArray<2, number>;
export type Ieniouoqkq4icf = {
    "spec_version": number;
    "spec_name": string;
};
export type I1v7jbnil3tjns = Array<{
    "used_bandwidth": Anonymize<Ieafp1gui1o4cl>;
    "para_head_hash"?: Anonymize<I4s6vifaf8k998>;
    "consumed_go_ahead_signal"?: Anonymize<Iav8k1edbj86k7>;
}>;
export type Ieafp1gui1o4cl = {
    "ump_msg_count": number;
    "ump_total_bytes": number;
    "hrmp_outgoing": Array<[number, {
        "msg_count": number;
        "total_bytes": number;
    }]>;
};
export type Iav8k1edbj86k7 = (UpgradeGoAhead) | undefined;
export type UpgradeGoAhead = Enum<{
    "Abort": undefined;
    "GoAhead": undefined;
}>;
export declare const UpgradeGoAhead: GetEnum<UpgradeGoAhead>;
export type I8jgj1nhcr2dg8 = {
    "used_bandwidth": Anonymize<Ieafp1gui1o4cl>;
    "hrmp_watermark"?: Anonymize<I4arjljr6dpflb>;
    "consumed_go_ahead_signal"?: Anonymize<Iav8k1edbj86k7>;
};
export type Ifn6q3equiq9qi = {
    "parent_head": Binary;
    "relay_parent_number": number;
    "relay_parent_storage_root": FixedSizeBinary<32>;
    "max_pov_size": number;
};
export type Ia3sb0vgvovhtg = (UpgradeRestriction) | undefined;
export type UpgradeRestriction = Enum<{
    "Present": undefined;
}>;
export declare const UpgradeRestriction: GetEnum<UpgradeRestriction>;
export type Itom7fk49o0c9 = Array<Binary>;
export type I4i91h98n3cv1b = {
    "dmq_mqc_head": FixedSizeBinary<32>;
    "relay_dispatch_queue_remaining_capacity": {
        "remaining_count": number;
        "remaining_size": number;
    };
    "ingress_channels": Array<[number, {
        "max_capacity": number;
        "max_total_size": number;
        "max_message_size": number;
        "msg_count": number;
        "total_size": number;
        "mqc_head"?: Anonymize<I4s6vifaf8k998>;
    }]>;
    "egress_channels": Array<[number, {
        "max_capacity": number;
        "max_total_size": number;
        "max_message_size": number;
        "msg_count": number;
        "total_size": number;
        "mqc_head"?: Anonymize<I4s6vifaf8k998>;
    }]>;
};
export type I4iumukclgj8ej = {
    "max_code_size": number;
    "max_head_data_size": number;
    "max_upward_queue_count": number;
    "max_upward_queue_size": number;
    "max_upward_message_size": number;
    "max_upward_message_num_per_candidate": number;
    "hrmp_max_message_num_per_candidate": number;
    "validation_upgrade_cooldown": number;
    "validation_upgrade_delay": number;
    "async_backing_params": {
        "max_candidate_depth": number;
        "allowed_ancestry_len": number;
    };
};
export type Iqnbvitf7a7l3 = Array<[number, FixedSizeBinary<32>]>;
export type I6r5cbv8ttrb09 = Array<{
    "recipient": number;
    "data": Binary;
}>;
export type Ibgl04rn6nbfm6 = {
    "code_hash": FixedSizeBinary<32>;
    "check_version": boolean;
};
export type I8ds64oj6581v0 = Array<{
    "id": FixedSizeBinary<8>;
    "amount": bigint;
    "reasons": BalancesTypesReasons;
}>;
export type BalancesTypesReasons = Enum<{
    "Fee": undefined;
    "Misc": undefined;
    "All": undefined;
}>;
export declare const BalancesTypesReasons: GetEnum<BalancesTypesReasons>;
export type Ia7pdug7cdsg8g = Array<{
    "id": FixedSizeBinary<8>;
    "amount": bigint;
}>;
export type I9bin2jc70qt6q = Array<Anonymize<I3qt1hgg4djhgb>>;
export type TransactionPaymentReleases = Enum<{
    "V1Ancient": undefined;
    "V2": undefined;
}>;
export declare const TransactionPaymentReleases: GetEnum<TransactionPaymentReleases>;
export type Ifi4da1gej1fri = Array<{
    "who": SS58String;
    "deposit": bigint;
}>;
export type Ifvgo9568rpmqc = Array<Anonymize<I8uo3fpd3bcc6f>>;
export type I8uo3fpd3bcc6f = [SS58String, FixedSizeBinary<32>];
export type I6cs1itejju2vv = [bigint, number];
export type I9cllvl0tmdeco = Array<{
    "sender": number;
    "state": Anonymize<Ic2gg6ldfq068e>;
    "message_metadata": Array<[number, Enum<{
        "ConcatenatedVersionedXcm": undefined;
        "ConcatenatedEncodedBlob": undefined;
        "Signals": undefined;
    }>]>;
}>;
export type Ic2gg6ldfq068e = AnonymousEnum<{
    "Ok": undefined;
    "Suspended": undefined;
}>;
export type Ib77b0fp1a6mjr = Array<{
    "recipient": number;
    "state": Anonymize<Ic2gg6ldfq068e>;
    "signals_exist": boolean;
    "first_index": number;
    "last_index": number;
}>;
export type I5g2vv0ckl2m8b = [number, number];
export type Ie0cpusdmler9p = {
    "suspend_threshold": number;
    "drop_threshold": number;
    "resume_threshold": number;
    "threshold_weight": Anonymize<I4q39t5hn830vp>;
    "weight_restrict_decay": Anonymize<I4q39t5hn830vp>;
    "xcmp_max_individual_weight": Anonymize<I4q39t5hn830vp>;
};
export type I6o3vavku3vjsk = [number, number, Binary];
export type I9us7218h9qeio = AnonymousEnum<{
    "Pending": {
        "responder": Anonymize<Idbg08q7edq40c>;
        "maybe_match_querier"?: (Anonymize<Idbg08q7edq40c>) | undefined;
        "maybe_notify"?: (FixedSizeBinary<2>) | undefined;
        "timeout": number;
    };
    "VersionNotifier": {
        "origin": Anonymize<Idbg08q7edq40c>;
        "is_active": boolean;
    };
    "Ready": {
        "response": Enum<{
            "V2": XcmV2Response;
            "V3": Anonymize<I4e56rm9p07o27>;
        }>;
        "at": number;
    };
}>;
export type XcmV2Response = Enum<{
    "Null": undefined;
    "Assets": Anonymize<I2sllmucln1iic>;
    "ExecutionResult"?: ([number, XcmV2TraitsError]) | undefined;
    "Version": number;
}>;
export declare const XcmV2Response: GetEnum<XcmV2Response>;
export type XcmV2TraitsError = Enum<{
    "Overflow": undefined;
    "Unimplemented": undefined;
    "UntrustedReserveLocation": undefined;
    "UntrustedTeleportLocation": undefined;
    "MultiLocationFull": undefined;
    "MultiLocationNotInvertible": undefined;
    "BadOrigin": undefined;
    "InvalidLocation": undefined;
    "AssetNotFound": undefined;
    "FailedToTransactAsset": undefined;
    "NotWithdrawable": undefined;
    "LocationCannotHold": undefined;
    "ExceedsMaxMessageSize": undefined;
    "DestinationUnsupported": undefined;
    "Transport": undefined;
    "Unroutable": undefined;
    "UnknownClaim": undefined;
    "FailedToDecode": undefined;
    "MaxWeightInvalid": undefined;
    "NotHoldingFees": undefined;
    "TooExpensive": undefined;
    "Trap": bigint;
    "UnhandledXcmVersion": undefined;
    "WeightLimitReached": bigint;
    "Barrier": undefined;
    "WeightNotComputable": undefined;
}>;
export declare const XcmV2TraitsError: GetEnum<XcmV2TraitsError>;
export type I68itkd3tsdg5p = [number, Anonymize<Idbg08q7edq40c>];
export type I7vlvrrl2pnbgk = [bigint, Anonymize<I4q39t5hn830vp>, number];
export type I9osn6oe908bj1 = Array<[Anonymize<Idbg08q7edq40c>, number]>;
export type XcmPalletVersionMigrationStage = Enum<{
    "MigrateSupportedVersion": undefined;
    "MigrateVersionNotifiers": undefined;
    "NotifyCurrentTargets"?: Anonymize<Iabpgqcjikia83>;
    "MigrateAndNotifyOldTargets": undefined;
}>;
export declare const XcmPalletVersionMigrationStage: GetEnum<XcmPalletVersionMigrationStage>;
export type Iabpgqcjikia83 = (Binary) | undefined;
export type I78c7o5kd104ql = {
    "amount": bigint;
    "owner": Anonymize<Idbg08q7edq40c>;
    "locker": Anonymize<Idbg08q7edq40c>;
    "consumers": Array<[undefined, bigint]>;
};
export type I165b31dp8f95m = [number, SS58String, Enum<{
    "V3": Anonymize<Ic00osfu517iss>;
}>];
export type I7csvdmmfnffaq = Array<[bigint, Anonymize<Idbg08q7edq40c>]>;
export type Iepvrcsdbii2qt = {
    "begin_used": number;
    "end_used": number;
    "overweight_count": bigint;
};
export type I82vjkits3vc46 = Array<Anonymize<Icp9h5ma02v1rg>>;
export type Icp9h5ma02v1rg = [number, Binary];
export type Iag146hmjgqfgj = {
    "when": Anonymize<Itvprrpb0nm3o>;
    "deposit": bigint;
    "depositor": SS58String;
    "approvals": Anonymize<Ia2lhg7l2hilo3>;
};
export type I32or1mos65f9o = [Array<{
    "delegate": SS58String;
    "proxy_type": Anonymize<I5ftepkjop3g1u>;
    "delay": number;
}>, bigint];
export type I9p9lq3rej5bhc = [Array<{
    "real": SS58String;
    "call_hash": FixedSizeBinary<32>;
    "height": number;
}>, bigint];
export type I3qklfjubrljqh = {
    "owner": SS58String;
    "issuer": SS58String;
    "admin": SS58String;
    "freezer": SS58String;
    "supply": bigint;
    "deposit": bigint;
    "min_balance": bigint;
    "is_sufficient": boolean;
    "accounts": number;
    "sufficients": number;
    "approvals": number;
    "status": Enum<{
        "Live": undefined;
        "Frozen": undefined;
        "Destroying": undefined;
    }>;
};
export type Iag3f1hum3p4c8 = {
    "balance": bigint;
    "status": Enum<{
        "Liquid": undefined;
        "Frozen": undefined;
        "Blocked": undefined;
    }>;
    "reason": Enum<{
        "Consumer": undefined;
        "Sufficient": undefined;
        "DepositHeld": bigint;
        "DepositRefunded": undefined;
        "DepositFrom": [SS58String, bigint];
    }>;
};
export type I7svnfko10tq2e = [number, SS58String];
export type I4s6jkha20aoh0 = {
    "amount": bigint;
    "deposit": bigint;
};
export type I2brm5b9jij1st = [number, SS58String, SS58String];
export type I78s05f59eoi8b = {
    "deposit": bigint;
    "name": Binary;
    "symbol": Binary;
    "decimals": number;
    "is_frozen": boolean;
};
export type Ianufjuplcj6u4 = {
    "owner": SS58String;
    "issuer": SS58String;
    "admin": SS58String;
    "freezer": SS58String;
    "total_deposit": bigint;
    "free_holding": boolean;
    "items": number;
    "item_metadatas": number;
    "attributes": number;
    "is_frozen": boolean;
};
export type Id32h28hjj1tch = [SS58String, number, number];
export type I6ouflveob4eli = [SS58String, number];
export type I2mv9dvsaj3kcr = {
    "owner": SS58String;
    "approved"?: Anonymize<Ihfphjolmsqq1>;
    "is_frozen": boolean;
    "deposit": bigint;
};
export type I7781vnk0rm9eq = {
    "deposit": bigint;
    "data": Binary;
    "is_frozen": boolean;
};
export type Ie2iqtdb0stqo1 = [Binary, bigint];
export type I5irutptk105do = [number, Anonymize<I4arjljr6dpflb>, Binary];
export type Ic9nev69d8grv1 = [bigint, Anonymize<Ihfphjolmsqq1>];
export type I18m6a0sc4k7s9 = {
    "owner": SS58String;
    "owner_deposit": bigint;
    "items": number;
    "item_metadatas": number;
    "item_configs": number;
    "attributes": number;
};
export type Ic9iokm15iigt6 = {
    "owner": SS58String;
    "approvals": Array<[SS58String, Anonymize<I4arjljr6dpflb>]>;
    "deposit": Anonymize<Ic262ibdoec56a>;
};
export type I35m96p3u4vl0p = {
    "deposit": bigint;
    "data": Binary;
};
export type Iapmji0h53pmkn = {
    "deposit": Anonymize<I6e70ge7ubff75>;
    "data": Binary;
};
export type I6e70ge7ubff75 = {
    "account"?: Anonymize<Ihfphjolmsqq1>;
    "amount": bigint;
};
export type Idrr42svup341f = [Binary, Anonymize<I6e70ge7ubff75>];
export type I4ugih6gb4fmug = [number, Anonymize<I4arjljr6dpflb>, Anonymize<If3jjadhmug6qc>, Binary];
export type Idac0t49lnd4ls = {
    "desired_collection": number;
    "desired_item"?: Anonymize<I4arjljr6dpflb>;
    "price"?: Anonymize<I6oogc1jbmmi81>;
    "deadline": number;
};
export type I72ndo6phms8ik = {
    "settings": bigint;
    "max_supply"?: Anonymize<I4arjljr6dpflb>;
    "mint_settings": Anonymize<Ia3s8qquibn97v>;
};
export type Ia3s8qquibn97v = {
    "mint_type": Enum<{
        "Issuer": undefined;
        "Public": undefined;
        "HolderOf": number;
    }>;
    "price"?: Anonymize<I35p85j063s0il>;
    "start_block"?: Anonymize<I4arjljr6dpflb>;
    "end_block"?: Anonymize<I4arjljr6dpflb>;
    "default_item_settings": bigint;
};
export type I35p85j063s0il = (bigint) | undefined;
export type Iaohs8th6gln8n = [Anonymize<Idpatrs8teqg2g>, SS58String];
export type I8mvs9j12ubmkk = [Anonymize<Idpatrs8teqg2g>, SS58String, SS58String];
export type In7a38730s6qs = {
    "base_block": Anonymize<I4q39t5hn830vp>;
    "max_block": Anonymize<I4q39t5hn830vp>;
    "per_class": {
        "normal": {
            "base_extrinsic": Anonymize<I4q39t5hn830vp>;
            "max_extrinsic"?: (Anonymize<I4q39t5hn830vp>) | undefined;
            "max_total"?: (Anonymize<I4q39t5hn830vp>) | undefined;
            "reserved"?: (Anonymize<I4q39t5hn830vp>) | undefined;
        };
        "operational": {
            "base_extrinsic": Anonymize<I4q39t5hn830vp>;
            "max_extrinsic"?: (Anonymize<I4q39t5hn830vp>) | undefined;
            "max_total"?: (Anonymize<I4q39t5hn830vp>) | undefined;
            "reserved"?: (Anonymize<I4q39t5hn830vp>) | undefined;
        };
        "mandatory": {
            "base_extrinsic": Anonymize<I4q39t5hn830vp>;
            "max_extrinsic"?: (Anonymize<I4q39t5hn830vp>) | undefined;
            "max_total"?: (Anonymize<I4q39t5hn830vp>) | undefined;
            "reserved"?: (Anonymize<I4q39t5hn830vp>) | undefined;
        };
    };
};
export type If15el53dd76v9 = {
    "normal": number;
    "operational": number;
    "mandatory": number;
};
export type I9s0ave7t0vnrk = {
    "read": bigint;
    "write": bigint;
};
export type Ic6nglu2db2c36 = {
    "spec_name": string;
    "impl_name": string;
    "authoring_version": number;
    "spec_version": number;
    "impl_version": number;
    "apis": Array<[FixedSizeBinary<8>, number]>;
    "transaction_version": number;
    "state_version": number;
};
export type Iccjej82b2j3c5 = AnonymousEnum<{
    /**
     * See [`Pallet::remark`].
     */
    "remark": Anonymize<I8ofcg5rbj0g2c>;
    /**
     * See [`Pallet::set_heap_pages`].
     */
    "set_heap_pages": Anonymize<I4adgbll7gku4i>;
    /**
     * See [`Pallet::set_code`].
     */
    "set_code": Anonymize<I6pjjpfvhvcfru>;
    /**
     * See [`Pallet::set_code_without_checks`].
     */
    "set_code_without_checks": Anonymize<I6pjjpfvhvcfru>;
    /**
     * See [`Pallet::set_storage`].
     */
    "set_storage": Anonymize<I9pj91mj79qekl>;
    /**
     * See [`Pallet::kill_storage`].
     */
    "kill_storage": Anonymize<I39uah9nss64h9>;
    /**
     * See [`Pallet::kill_prefix`].
     */
    "kill_prefix": Anonymize<Ik64dknsq7k08>;
    /**
     * See [`Pallet::remark_with_event`].
     */
    "remark_with_event": Anonymize<I8ofcg5rbj0g2c>;
}>;
export type I8ofcg5rbj0g2c = {
    "remark": Binary;
};
export type I4adgbll7gku4i = {
    "pages": bigint;
};
export type I6pjjpfvhvcfru = {
    "code": Binary;
};
export type I9pj91mj79qekl = {
    "items": Anonymize<I6pi5ou8r1hblk>;
};
export type I6pi5ou8r1hblk = Array<FixedSizeArray<2, Binary>>;
export type I39uah9nss64h9 = {
    "keys": Anonymize<Itom7fk49o0c9>;
};
export type Ik64dknsq7k08 = {
    "prefix": Binary;
    "subkeys": number;
};
export type I3jmip7qjlcqot = AnonymousEnum<{
    /**
     * See [`Pallet::set_validation_data`].
     */
    "set_validation_data": Anonymize<I60v7bikk54tpu>;
    /**
     * See [`Pallet::sudo_send_upward_message`].
     */
    "sudo_send_upward_message": Anonymize<Ifpj261e8s63m3>;
    /**
     * See [`Pallet::authorize_upgrade`].
     */
    "authorize_upgrade": Anonymize<Ibgl04rn6nbfm6>;
    /**
     * See [`Pallet::enact_authorized_upgrade`].
     */
    "enact_authorized_upgrade": Anonymize<I6pjjpfvhvcfru>;
}>;
export type I60v7bikk54tpu = {
    "data": {
        "validation_data": Anonymize<Ifn6q3equiq9qi>;
        "relay_chain_state": Anonymize<Itom7fk49o0c9>;
        "downward_messages": Array<{
            "sent_at": number;
            "msg": Binary;
        }>;
        "horizontal_messages": Array<[number, Array<{
            "sent_at": number;
            "data": Binary;
        }>]>;
    };
};
export type Ifpj261e8s63m3 = {
    "message": Binary;
};
export type I7d75gqfg6jh9c = AnonymousEnum<{
    /**
     * See [`Pallet::set`].
     */
    "set": Anonymize<Idcr6u6361oad9>;
}>;
export type Idcr6u6361oad9 = {
    "now": bigint;
};
export type I1uvhaq3q54bet = AnonymousEnum<{
    /**
     * See [`Pallet::transfer_allow_death`].
     */
    "transfer_allow_death": Anonymize<I4ktuaksf5i1gk>;
    /**
     * See [`Pallet::force_transfer`].
     */
    "force_transfer": Anonymize<I9bqtpv2ii35mp>;
    /**
     * See [`Pallet::transfer_keep_alive`].
     */
    "transfer_keep_alive": Anonymize<I4ktuaksf5i1gk>;
    /**
     * See [`Pallet::transfer_all`].
     */
    "transfer_all": Anonymize<I9j7pagd6d4bda>;
    /**
     * See [`Pallet::force_unreserve`].
     */
    "force_unreserve": Anonymize<I2h9pmio37r7fb>;
    /**
     * See [`Pallet::upgrade_accounts`].
     */
    "upgrade_accounts": Anonymize<Ibmr18suc9ikh9>;
    /**
     * See [`Pallet::force_set_balance`].
     */
    "force_set_balance": Anonymize<I9iq22t0burs89>;
}>;
export type I4ktuaksf5i1gk = {
    "dest": MultiAddress;
    "value": bigint;
};
export type MultiAddress = Enum<{
    "Id": SS58String;
    "Index": undefined;
    "Raw": Binary;
    "Address32": FixedSizeBinary<32>;
    "Address20": FixedSizeBinary<20>;
}>;
export declare const MultiAddress: GetEnum<MultiAddress>;
export type I9bqtpv2ii35mp = {
    "source": MultiAddress;
    "dest": MultiAddress;
    "value": bigint;
};
export type I9j7pagd6d4bda = {
    "dest": MultiAddress;
    "keep_alive": boolean;
};
export type I2h9pmio37r7fb = {
    "who": MultiAddress;
    "amount": bigint;
};
export type Ibmr18suc9ikh9 = {
    "who": Anonymize<Ia2lhg7l2hilo3>;
};
export type I9iq22t0burs89 = {
    "who": MultiAddress;
    "new_free": bigint;
};
export type I5c9voacr9gah8 = AnonymousEnum<{
    /**
     * See [`Pallet::set_invulnerables`].
     */
    "set_invulnerables": Anonymize<Ifccifqltb5obi>;
    /**
     * See [`Pallet::set_desired_candidates`].
     */
    "set_desired_candidates": Anonymize<Iadtsfv699cq8b>;
    /**
     * See [`Pallet::set_candidacy_bond`].
     */
    "set_candidacy_bond": Anonymize<Ialpmgmhr3gk5r>;
    /**
     * See [`Pallet::register_as_candidate`].
     */
    "register_as_candidate": undefined;
    /**
     * See [`Pallet::leave_intent`].
     */
    "leave_intent": undefined;
    /**
     * See [`Pallet::add_invulnerable`].
     */
    "add_invulnerable": Anonymize<I4cbvqmqadhrea>;
    /**
     * See [`Pallet::remove_invulnerable`].
     */
    "remove_invulnerable": Anonymize<I4cbvqmqadhrea>;
}>;
export type Ifccifqltb5obi = {
    "new": Anonymize<Ia2lhg7l2hilo3>;
};
export type Iadtsfv699cq8b = {
    "max": number;
};
export type Ialpmgmhr3gk5r = {
    "bond": bigint;
};
export type I77dda7hps0u37 = AnonymousEnum<{
    /**
     * See [`Pallet::set_keys`].
     */
    "set_keys": Anonymize<I81vt5eq60l4b6>;
    /**
     * See [`Pallet::purge_keys`].
     */
    "purge_keys": undefined;
}>;
export type I81vt5eq60l4b6 = {
    "keys": FixedSizeBinary<32>;
    "proof": Binary;
};
export type I57tqg8fvt7f6m = AnonymousEnum<{
    /**
     * See [`Pallet::service_overweight`].
     */
    "service_overweight": Anonymize<Iab1retd4gg4q1>;
    /**
     * See [`Pallet::suspend_xcm_execution`].
     */
    "suspend_xcm_execution": undefined;
    /**
     * See [`Pallet::resume_xcm_execution`].
     */
    "resume_xcm_execution": undefined;
    /**
     * See [`Pallet::update_suspend_threshold`].
     */
    "update_suspend_threshold": Anonymize<I3vh014cqgmrfd>;
    /**
     * See [`Pallet::update_drop_threshold`].
     */
    "update_drop_threshold": Anonymize<I3vh014cqgmrfd>;
    /**
     * See [`Pallet::update_resume_threshold`].
     */
    "update_resume_threshold": Anonymize<I3vh014cqgmrfd>;
    /**
     * See [`Pallet::update_threshold_weight`].
     */
    "update_threshold_weight": Anonymize<I2tni7rrb2buqm>;
    /**
     * See [`Pallet::update_weight_restrict_decay`].
     */
    "update_weight_restrict_decay": Anonymize<I2tni7rrb2buqm>;
    /**
     * See [`Pallet::update_xcmp_max_individual_weight`].
     */
    "update_xcmp_max_individual_weight": Anonymize<I2tni7rrb2buqm>;
}>;
export type Iab1retd4gg4q1 = {
    "index": bigint;
    "weight_limit": Anonymize<I4q39t5hn830vp>;
};
export type I3vh014cqgmrfd = {
    "new": number;
};
export type I2tni7rrb2buqm = {
    "new": Anonymize<I4q39t5hn830vp>;
};
export type Ia6ktlm9tkn8j6 = AnonymousEnum<{
    /**
     * See [`Pallet::send`].
     */
    "send": Anonymize<I177omkp0t3av4>;
    /**
     * See [`Pallet::teleport_assets`].
     */
    "teleport_assets": Anonymize<I561t4i7oneora>;
    /**
     * See [`Pallet::reserve_transfer_assets`].
     */
    "reserve_transfer_assets": Anonymize<I561t4i7oneora>;
    /**
     * See [`Pallet::execute`].
     */
    "execute": Anonymize<Ia8um7upnt2t99>;
    /**
     * See [`Pallet::force_xcm_version`].
     */
    "force_xcm_version": Anonymize<I44pbivm2pe7qc>;
    /**
     * See [`Pallet::force_default_xcm_version`].
     */
    "force_default_xcm_version": Anonymize<Ic76kfh5ebqkpl>;
    /**
     * See [`Pallet::force_subscribe_version_notify`].
     */
    "force_subscribe_version_notify": Anonymize<I8nm9vc7o6er85>;
    /**
     * See [`Pallet::force_unsubscribe_version_notify`].
     */
    "force_unsubscribe_version_notify": Anonymize<I8nm9vc7o6er85>;
    /**
     * See [`Pallet::limited_reserve_transfer_assets`].
     */
    "limited_reserve_transfer_assets": Anonymize<I5up1l6nq7b3hn>;
    /**
     * See [`Pallet::limited_teleport_assets`].
     */
    "limited_teleport_assets": Anonymize<I5up1l6nq7b3hn>;
    /**
     * See [`Pallet::force_suspension`].
     */
    "force_suspension": Anonymize<Ibgm4rnf22lal1>;
}>;
export type I177omkp0t3av4 = {
    "dest": Anonymize<Idbg08q7edq40c>;
    "message": Anonymize<I5f1g9rtdd19nm>;
};
export type I5f1g9rtdd19nm = AnonymousEnum<{
    "V2": Anonymize<Iemqgk0vect4v7>;
    "V3": Anonymize<I72ak5168u17sk>;
}>;
export type Iemqgk0vect4v7 = Array<XcmV2Instruction>;
export type XcmV2Instruction = Enum<{
    "WithdrawAsset": Anonymize<I2sllmucln1iic>;
    "ReserveAssetDeposited": Anonymize<I2sllmucln1iic>;
    "ReceiveTeleportedAsset": Anonymize<I2sllmucln1iic>;
    "QueryResponse": {
        "query_id": bigint;
        "response": XcmV2Response;
        "max_weight": bigint;
    };
    "TransferAsset": {
        "assets": Anonymize<I2sllmucln1iic>;
        "beneficiary": Anonymize<I4frqunb5hj2km>;
    };
    "TransferReserveAsset": {
        "assets": Anonymize<I2sllmucln1iic>;
        "dest": Anonymize<I4frqunb5hj2km>;
        "xcm": Anonymize<Iemqgk0vect4v7>;
    };
    "Transact": {
        "origin_type": XcmV2OriginKind;
        "require_weight_at_most": bigint;
        "call": Binary;
    };
    "HrmpNewChannelOpenRequest": Anonymize<I5uhhrjqfuo4e5>;
    "HrmpChannelAccepted": Anonymize<Ifij4jam0o7sub>;
    "HrmpChannelClosing": Anonymize<Ieeb4svd9i8fji>;
    "ClearOrigin": undefined;
    "DescendOrigin": XcmV2MultilocationJunctions;
    "ReportError": {
        "query_id": bigint;
        "dest": Anonymize<I4frqunb5hj2km>;
        "max_response_weight": bigint;
    };
    "DepositAsset": {
        "assets": XcmV2MultiAssetFilter;
        "max_assets": number;
        "beneficiary": Anonymize<I4frqunb5hj2km>;
    };
    "DepositReserveAsset": {
        "assets": XcmV2MultiAssetFilter;
        "max_assets": number;
        "dest": Anonymize<I4frqunb5hj2km>;
        "xcm": Anonymize<Iemqgk0vect4v7>;
    };
    "ExchangeAsset": {
        "give": XcmV2MultiAssetFilter;
        "receive": Anonymize<I2sllmucln1iic>;
    };
    "InitiateReserveWithdraw": {
        "assets": XcmV2MultiAssetFilter;
        "reserve": Anonymize<I4frqunb5hj2km>;
        "xcm": Anonymize<Iemqgk0vect4v7>;
    };
    "InitiateTeleport": {
        "assets": XcmV2MultiAssetFilter;
        "dest": Anonymize<I4frqunb5hj2km>;
        "xcm": Anonymize<Iemqgk0vect4v7>;
    };
    "QueryHolding": {
        "query_id": bigint;
        "dest": Anonymize<I4frqunb5hj2km>;
        "assets": XcmV2MultiAssetFilter;
        "max_response_weight": bigint;
    };
    "BuyExecution": {
        "fees": Anonymize<Id8h647t880l31>;
        "weight_limit": XcmV2WeightLimit;
    };
    "RefundSurplus": undefined;
    "SetErrorHandler": Anonymize<Iemqgk0vect4v7>;
    "SetAppendix": Anonymize<Iemqgk0vect4v7>;
    "ClearError": undefined;
    "ClaimAsset": {
        "assets": Anonymize<I2sllmucln1iic>;
        "ticket": Anonymize<I4frqunb5hj2km>;
    };
    "Trap": bigint;
    "SubscribeVersion": {
        "query_id": bigint;
        "max_response_weight": bigint;
    };
    "UnsubscribeVersion": undefined;
}>;
export declare const XcmV2Instruction: GetEnum<XcmV2Instruction>;
export type XcmV2MultiAssetFilter = Enum<{
    "Definite": Anonymize<I2sllmucln1iic>;
    "Wild": XcmV2MultiassetWildMultiAsset;
}>;
export declare const XcmV2MultiAssetFilter: GetEnum<XcmV2MultiAssetFilter>;
export type XcmV2MultiassetWildMultiAsset = Enum<{
    "All": undefined;
    "AllOf": {
        "id": XcmV2MultiassetAssetId;
        "fun": XcmV2MultiassetWildFungibility;
    };
}>;
export declare const XcmV2MultiassetWildMultiAsset: GetEnum<XcmV2MultiassetWildMultiAsset>;
export type XcmV2WeightLimit = Enum<{
    "Unlimited": undefined;
    "Limited": bigint;
}>;
export declare const XcmV2WeightLimit: GetEnum<XcmV2WeightLimit>;
export type I561t4i7oneora = {
    "dest": Anonymize<Idbg08q7edq40c>;
    "beneficiary": Anonymize<Idbg08q7edq40c>;
    "assets": Anonymize<Ik93katrmbiat>;
    "fee_asset_item": number;
};
export type Ia8um7upnt2t99 = {
    "message": Anonymize<I5f1g9rtdd19nm>;
    "max_weight": Anonymize<I4q39t5hn830vp>;
};
export type Ic76kfh5ebqkpl = {
    "maybe_xcm_version"?: Anonymize<I4arjljr6dpflb>;
};
export type I8nm9vc7o6er85 = {
    "location": Anonymize<Idbg08q7edq40c>;
};
export type I5up1l6nq7b3hn = {
    "dest": Anonymize<Idbg08q7edq40c>;
    "beneficiary": Anonymize<Idbg08q7edq40c>;
    "assets": Anonymize<Ik93katrmbiat>;
    "fee_asset_item": number;
    "weight_limit": XcmV3WeightLimit;
};
export type Ibgm4rnf22lal1 = {
    "suspended": boolean;
};
export type I3lfpt1qictomp = AnonymousEnum<{
    /**
     * See [`Pallet::service_overweight`].
     */
    "service_overweight": Anonymize<Iab1retd4gg4q1>;
}>;
export type I30fq4lhv38rfo = AnonymousEnum<{
    /**
     * See [`Pallet::batch`].
     */
    "batch": Anonymize<Idui8q47jf1fh0>;
    /**
     * See [`Pallet::as_derivative`].
     */
    "as_derivative": Anonymize<I2tmmvssg2vf28>;
    /**
     * See [`Pallet::batch_all`].
     */
    "batch_all": Anonymize<Idui8q47jf1fh0>;
    /**
     * See [`Pallet::dispatch_as`].
     */
    "dispatch_as": Anonymize<Icboh8usno3nth>;
    /**
     * See [`Pallet::force_batch`].
     */
    "force_batch": Anonymize<Idui8q47jf1fh0>;
    /**
     * See [`Pallet::with_weight`].
     */
    "with_weight": Anonymize<Ic5jsm6t6f5d2b>;
}>;
export type Idui8q47jf1fh0 = {
    "calls": Array<TxCallData>;
};
export type I2tmmvssg2vf28 = {
    "index": number;
    "call": TxCallData;
};
export type Icboh8usno3nth = {
    "as_origin": Enum<{
        "system": DispatchRawOrigin;
        "PolkadotXcm": Enum<{
            "Xcm": Anonymize<Idpatrs8teqg2g>;
            "Response": Anonymize<Idpatrs8teqg2g>;
        }>;
        "CumulusXcm": Enum<{
            "Relay": undefined;
            "SiblingParachain": number;
        }>;
        "Void": undefined;
    }>;
    "call": TxCallData;
};
export type DispatchRawOrigin = Enum<{
    "Root": undefined;
    "Signed": SS58String;
    "None": undefined;
}>;
export declare const DispatchRawOrigin: GetEnum<DispatchRawOrigin>;
export type Ic5jsm6t6f5d2b = {
    "call": TxCallData;
    "weight": Anonymize<I4q39t5hn830vp>;
};
export type Iq50caqjqj483 = AnonymousEnum<{
    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    "as_multi_threshold_1": Anonymize<I8qbpoatnebb1p>;
    /**
     * See [`Pallet::as_multi`].
     */
    "as_multi": Anonymize<Ic7cq8vbb84auq>;
    /**
     * See [`Pallet::approve_as_multi`].
     */
    "approve_as_multi": Anonymize<Ideaemvoneh309>;
    /**
     * See [`Pallet::cancel_as_multi`].
     */
    "cancel_as_multi": Anonymize<I3d9o9d7epp66v>;
}>;
export type I8qbpoatnebb1p = {
    "other_signatories": Anonymize<Ia2lhg7l2hilo3>;
    "call": TxCallData;
};
export type Ic7cq8vbb84auq = {
    "threshold": number;
    "other_signatories": Anonymize<Ia2lhg7l2hilo3>;
    "maybe_timepoint"?: Anonymize<I95jfd8j5cr5eh>;
    "call": TxCallData;
    "max_weight": Anonymize<I4q39t5hn830vp>;
};
export type I95jfd8j5cr5eh = (Anonymize<Itvprrpb0nm3o>) | undefined;
export type Ideaemvoneh309 = {
    "threshold": number;
    "other_signatories": Anonymize<Ia2lhg7l2hilo3>;
    "maybe_timepoint"?: Anonymize<I95jfd8j5cr5eh>;
    "call_hash": FixedSizeBinary<32>;
    "max_weight": Anonymize<I4q39t5hn830vp>;
};
export type I3d9o9d7epp66v = {
    "threshold": number;
    "other_signatories": Anonymize<Ia2lhg7l2hilo3>;
    "timepoint": Anonymize<Itvprrpb0nm3o>;
    "call_hash": FixedSizeBinary<32>;
};
export type I525hp2jsp5npm = AnonymousEnum<{
    /**
     * See [`Pallet::proxy`].
     */
    "proxy": Anonymize<Ibd8tfruce82ld>;
    /**
     * See [`Pallet::add_proxy`].
     */
    "add_proxy": Anonymize<Iovrcu9bfelfq>;
    /**
     * See [`Pallet::remove_proxy`].
     */
    "remove_proxy": Anonymize<Iovrcu9bfelfq>;
    /**
     * See [`Pallet::remove_proxies`].
     */
    "remove_proxies": undefined;
    /**
     * See [`Pallet::create_pure`].
     */
    "create_pure": Anonymize<Iefr8jgtgfk8um>;
    /**
     * See [`Pallet::kill_pure`].
     */
    "kill_pure": Anonymize<I3j05hul54uj7q>;
    /**
     * See [`Pallet::announce`].
     */
    "announce": Anonymize<I2eb501t8s6hsq>;
    /**
     * See [`Pallet::remove_announcement`].
     */
    "remove_announcement": Anonymize<I2eb501t8s6hsq>;
    /**
     * See [`Pallet::reject_announcement`].
     */
    "reject_announcement": Anonymize<Ianmuoljk2sk1u>;
    /**
     * See [`Pallet::proxy_announced`].
     */
    "proxy_announced": Anonymize<I2ptedi00tj9mc>;
}>;
export type Ibd8tfruce82ld = {
    "real": MultiAddress;
    "force_proxy_type"?: Anonymize<I7rk1n3vg3et43>;
    "call": TxCallData;
};
export type I7rk1n3vg3et43 = (Anonymize<I5ftepkjop3g1u>) | undefined;
export type Iovrcu9bfelfq = {
    "delegate": MultiAddress;
    "proxy_type": Anonymize<I5ftepkjop3g1u>;
    "delay": number;
};
export type Iefr8jgtgfk8um = {
    "proxy_type": Anonymize<I5ftepkjop3g1u>;
    "delay": number;
    "index": number;
};
export type I3j05hul54uj7q = {
    "spawner": MultiAddress;
    "proxy_type": Anonymize<I5ftepkjop3g1u>;
    "index": number;
    "height": number;
    "ext_index": number;
};
export type I2eb501t8s6hsq = {
    "real": MultiAddress;
    "call_hash": FixedSizeBinary<32>;
};
export type Ianmuoljk2sk1u = {
    "delegate": MultiAddress;
    "call_hash": FixedSizeBinary<32>;
};
export type I2ptedi00tj9mc = {
    "delegate": MultiAddress;
    "real": MultiAddress;
    "force_proxy_type"?: Anonymize<I7rk1n3vg3et43>;
    "call": TxCallData;
};
export type Ideusanoto4b1j = AnonymousEnum<{
    /**
     * See [`Pallet::create`].
     */
    "create": Anonymize<Ic357tcepuvo5c>;
    /**
     * See [`Pallet::force_create`].
     */
    "force_create": Anonymize<I2rnoam876ruhj>;
    /**
     * See [`Pallet::start_destroy`].
     */
    "start_destroy": Anonymize<Ic5b47dj4coa3r>;
    /**
     * See [`Pallet::destroy_accounts`].
     */
    "destroy_accounts": Anonymize<Ic5b47dj4coa3r>;
    /**
     * See [`Pallet::destroy_approvals`].
     */
    "destroy_approvals": Anonymize<Ic5b47dj4coa3r>;
    /**
     * See [`Pallet::finish_destroy`].
     */
    "finish_destroy": Anonymize<Ic5b47dj4coa3r>;
    /**
     * See [`Pallet::mint`].
     */
    "mint": Anonymize<Ib3qnc19gu633c>;
    /**
     * See [`Pallet::burn`].
     */
    "burn": Anonymize<Ifira6u9hi7cu1>;
    /**
     * See [`Pallet::transfer`].
     */
    "transfer": Anonymize<I72tqocvdoqfff>;
    /**
     * See [`Pallet::transfer_keep_alive`].
     */
    "transfer_keep_alive": Anonymize<I72tqocvdoqfff>;
    /**
     * See [`Pallet::force_transfer`].
     */
    "force_transfer": Anonymize<I2i27f3sfmvc05>;
    /**
     * See [`Pallet::freeze`].
     */
    "freeze": Anonymize<I1nlrtd1epki2d>;
    /**
     * See [`Pallet::thaw`].
     */
    "thaw": Anonymize<I1nlrtd1epki2d>;
    /**
     * See [`Pallet::freeze_asset`].
     */
    "freeze_asset": Anonymize<Ic5b47dj4coa3r>;
    /**
     * See [`Pallet::thaw_asset`].
     */
    "thaw_asset": Anonymize<Ic5b47dj4coa3r>;
    /**
     * See [`Pallet::transfer_ownership`].
     */
    "transfer_ownership": Anonymize<I3abtumcmempjs>;
    /**
     * See [`Pallet::set_team`].
     */
    "set_team": Anonymize<Id81m8flopt8ha>;
    /**
     * See [`Pallet::set_metadata`].
     */
    "set_metadata": Anonymize<I8hff7chabggkd>;
    /**
     * See [`Pallet::clear_metadata`].
     */
    "clear_metadata": Anonymize<Ic5b47dj4coa3r>;
    /**
     * See [`Pallet::force_set_metadata`].
     */
    "force_set_metadata": Anonymize<I49i39mtj1ivbs>;
    /**
     * See [`Pallet::force_clear_metadata`].
     */
    "force_clear_metadata": Anonymize<Ic5b47dj4coa3r>;
    /**
     * See [`Pallet::force_asset_status`].
     */
    "force_asset_status": Anonymize<Ifkr2kcak2vto1>;
    /**
     * See [`Pallet::approve_transfer`].
     */
    "approve_transfer": Anonymize<I1ju6r8q0cs9jt>;
    /**
     * See [`Pallet::cancel_approval`].
     */
    "cancel_approval": Anonymize<I4kpeq6j7cd5bu>;
    /**
     * See [`Pallet::force_cancel_approval`].
     */
    "force_cancel_approval": Anonymize<I5na1ka76k6811>;
    /**
     * See [`Pallet::transfer_approved`].
     */
    "transfer_approved": Anonymize<I59mhdb9omdqfa>;
    /**
     * See [`Pallet::touch`].
     */
    "touch": Anonymize<Ic5b47dj4coa3r>;
    /**
     * See [`Pallet::refund`].
     */
    "refund": Anonymize<I9vl5kpk0fpakt>;
    /**
     * See [`Pallet::set_min_balance`].
     */
    "set_min_balance": Anonymize<I717jt61hu19b4>;
    /**
     * See [`Pallet::touch_other`].
     */
    "touch_other": Anonymize<I1nlrtd1epki2d>;
    /**
     * See [`Pallet::refund_other`].
     */
    "refund_other": Anonymize<I1nlrtd1epki2d>;
    /**
     * See [`Pallet::block`].
     */
    "block": Anonymize<I1nlrtd1epki2d>;
}>;
export type Ic357tcepuvo5c = {
    "id": number;
    "admin": MultiAddress;
    "min_balance": bigint;
};
export type I2rnoam876ruhj = {
    "id": number;
    "owner": MultiAddress;
    "is_sufficient": boolean;
    "min_balance": bigint;
};
export type Ic5b47dj4coa3r = {
    "id": number;
};
export type Ib3qnc19gu633c = {
    "id": number;
    "beneficiary": MultiAddress;
    "amount": bigint;
};
export type Ifira6u9hi7cu1 = {
    "id": number;
    "who": MultiAddress;
    "amount": bigint;
};
export type I72tqocvdoqfff = {
    "id": number;
    "target": MultiAddress;
    "amount": bigint;
};
export type I2i27f3sfmvc05 = {
    "id": number;
    "source": MultiAddress;
    "dest": MultiAddress;
    "amount": bigint;
};
export type I1nlrtd1epki2d = {
    "id": number;
    "who": MultiAddress;
};
export type I3abtumcmempjs = {
    "id": number;
    "owner": MultiAddress;
};
export type Id81m8flopt8ha = {
    "id": number;
    "issuer": MultiAddress;
    "admin": MultiAddress;
    "freezer": MultiAddress;
};
export type I8hff7chabggkd = {
    "id": number;
    "name": Binary;
    "symbol": Binary;
    "decimals": number;
};
export type I49i39mtj1ivbs = {
    "id": number;
    "name": Binary;
    "symbol": Binary;
    "decimals": number;
    "is_frozen": boolean;
};
export type Ifkr2kcak2vto1 = {
    "id": number;
    "owner": MultiAddress;
    "issuer": MultiAddress;
    "admin": MultiAddress;
    "freezer": MultiAddress;
    "min_balance": bigint;
    "is_sufficient": boolean;
    "is_frozen": boolean;
};
export type I1ju6r8q0cs9jt = {
    "id": number;
    "delegate": MultiAddress;
    "amount": bigint;
};
export type I4kpeq6j7cd5bu = {
    "id": number;
    "delegate": MultiAddress;
};
export type I5na1ka76k6811 = {
    "id": number;
    "owner": MultiAddress;
    "delegate": MultiAddress;
};
export type I59mhdb9omdqfa = {
    "id": number;
    "owner": MultiAddress;
    "destination": MultiAddress;
    "amount": bigint;
};
export type I9vl5kpk0fpakt = {
    "id": number;
    "allow_burn": boolean;
};
export type I717jt61hu19b4 = {
    "id": number;
    "min_balance": bigint;
};
export type I7g34e4vegl9s4 = AnonymousEnum<{
    /**
     * See [`Pallet::create`].
     */
    "create": Anonymize<If66ivi02f7256>;
    /**
     * See [`Pallet::force_create`].
     */
    "force_create": Anonymize<I223jtcatlfkrc>;
    /**
     * See [`Pallet::destroy`].
     */
    "destroy": Anonymize<I223jg78mng8hq>;
    /**
     * See [`Pallet::mint`].
     */
    "mint": Anonymize<I4iiuiftkpq3fd>;
    /**
     * See [`Pallet::burn`].
     */
    "burn": Anonymize<Ibra6533h92c0a>;
    /**
     * See [`Pallet::transfer`].
     */
    "transfer": Anonymize<Ibgvkh96s68a66>;
    /**
     * See [`Pallet::redeposit`].
     */
    "redeposit": Anonymize<If9vko7pv0231m>;
    /**
     * See [`Pallet::freeze`].
     */
    "freeze": Anonymize<Iafkqus0ohh6l6>;
    /**
     * See [`Pallet::thaw`].
     */
    "thaw": Anonymize<Iafkqus0ohh6l6>;
    /**
     * See [`Pallet::freeze_collection`].
     */
    "freeze_collection": Anonymize<I6cu7obfo0rr0o>;
    /**
     * See [`Pallet::thaw_collection`].
     */
    "thaw_collection": Anonymize<I6cu7obfo0rr0o>;
    /**
     * See [`Pallet::transfer_ownership`].
     */
    "transfer_ownership": Anonymize<Ie5i0q2glmr0md>;
    /**
     * See [`Pallet::set_team`].
     */
    "set_team": Anonymize<I1ap9tlenhr44l>;
    /**
     * See [`Pallet::approve_transfer`].
     */
    "approve_transfer": Anonymize<Ib92t90p616grb>;
    /**
     * See [`Pallet::cancel_approval`].
     */
    "cancel_approval": Anonymize<Ieipuujd6879do>;
    /**
     * See [`Pallet::force_item_status`].
     */
    "force_item_status": Anonymize<Ie56eq9sg1rsoc>;
    /**
     * See [`Pallet::set_attribute`].
     */
    "set_attribute": Anonymize<I5tvvgui05tn6e>;
    /**
     * See [`Pallet::clear_attribute`].
     */
    "clear_attribute": Anonymize<Ibal0joadvdc2h>;
    /**
     * See [`Pallet::set_metadata`].
     */
    "set_metadata": Anonymize<Iceq9fmmp9aeqv>;
    /**
     * See [`Pallet::clear_metadata`].
     */
    "clear_metadata": Anonymize<Iafkqus0ohh6l6>;
    /**
     * See [`Pallet::set_collection_metadata`].
     */
    "set_collection_metadata": Anonymize<I9viqhmdtuof5e>;
    /**
     * See [`Pallet::clear_collection_metadata`].
     */
    "clear_collection_metadata": Anonymize<I6cu7obfo0rr0o>;
    /**
     * See [`Pallet::set_accept_ownership`].
     */
    "set_accept_ownership": Anonymize<Ibqooroq6rr5kr>;
    /**
     * See [`Pallet::set_collection_max_supply`].
     */
    "set_collection_max_supply": Anonymize<I6h88h8vba22v8>;
    /**
     * See [`Pallet::set_price`].
     */
    "set_price": Anonymize<Ia9cd4jqb5eecb>;
    /**
     * See [`Pallet::buy_item`].
     */
    "buy_item": Anonymize<I19jiel1ftbcce>;
}>;
export type If66ivi02f7256 = {
    "collection": number;
    "admin": MultiAddress;
};
export type I223jtcatlfkrc = {
    "collection": number;
    "owner": MultiAddress;
    "free_holding": boolean;
};
export type I223jg78mng8hq = {
    "collection": number;
    "witness": {
        "items": number;
        "item_metadatas": number;
        "attributes": number;
    };
};
export type I4iiuiftkpq3fd = {
    "collection": number;
    "item": number;
    "owner": MultiAddress;
};
export type Ibra6533h92c0a = {
    "collection": number;
    "item": number;
    "check_owner"?: Anonymize<Ia0jlc0rcbskuk>;
};
export type Ia0jlc0rcbskuk = (MultiAddress) | undefined;
export type Ibgvkh96s68a66 = {
    "collection": number;
    "item": number;
    "dest": MultiAddress;
};
export type If9vko7pv0231m = {
    "collection": number;
    "items": Anonymize<Icgljjb6j82uhn>;
};
export type Ie5i0q2glmr0md = {
    "collection": number;
    "owner": MultiAddress;
};
export type I1ap9tlenhr44l = {
    "collection": number;
    "issuer": MultiAddress;
    "admin": MultiAddress;
    "freezer": MultiAddress;
};
export type Ib92t90p616grb = {
    "collection": number;
    "item": number;
    "delegate": MultiAddress;
};
export type Ieipuujd6879do = {
    "collection": number;
    "item": number;
    "maybe_check_delegate"?: Anonymize<Ia0jlc0rcbskuk>;
};
export type Ie56eq9sg1rsoc = {
    "collection": number;
    "owner": MultiAddress;
    "issuer": MultiAddress;
    "admin": MultiAddress;
    "freezer": MultiAddress;
    "free_holding": boolean;
    "is_frozen": boolean;
};
export type Ibqooroq6rr5kr = {
    "maybe_collection"?: Anonymize<I4arjljr6dpflb>;
};
export type Ia9cd4jqb5eecb = {
    "collection": number;
    "item": number;
    "price"?: Anonymize<I35p85j063s0il>;
    "whitelisted_buyer"?: Anonymize<Ia0jlc0rcbskuk>;
};
export type I19jiel1ftbcce = {
    "collection": number;
    "item": number;
    "bid_price": bigint;
};
export type Iamd15okrnp6oq = AnonymousEnum<{
    /**
     * See [`Pallet::create`].
     */
    "create": Anonymize<I43aobns89nbkh>;
    /**
     * See [`Pallet::force_create`].
     */
    "force_create": Anonymize<Iamd7rovec1hfb>;
    /**
     * See [`Pallet::destroy`].
     */
    "destroy": Anonymize<I77ie723ncd4co>;
    /**
     * See [`Pallet::mint`].
     */
    "mint": Anonymize<Ieebloeahma3ke>;
    /**
     * See [`Pallet::force_mint`].
     */
    "force_mint": Anonymize<I4mbtpf4pu3rec>;
    /**
     * See [`Pallet::burn`].
     */
    "burn": Anonymize<Iafkqus0ohh6l6>;
    /**
     * See [`Pallet::transfer`].
     */
    "transfer": Anonymize<Ibgvkh96s68a66>;
    /**
     * See [`Pallet::redeposit`].
     */
    "redeposit": Anonymize<If9vko7pv0231m>;
    /**
     * See [`Pallet::lock_item_transfer`].
     */
    "lock_item_transfer": Anonymize<Iafkqus0ohh6l6>;
    /**
     * See [`Pallet::unlock_item_transfer`].
     */
    "unlock_item_transfer": Anonymize<Iafkqus0ohh6l6>;
    /**
     * See [`Pallet::lock_collection`].
     */
    "lock_collection": Anonymize<I1ahf3pvgsgbu>;
    /**
     * See [`Pallet::transfer_ownership`].
     */
    "transfer_ownership": Anonymize<Ie5i0q2glmr0md>;
    /**
     * See [`Pallet::set_team`].
     */
    "set_team": Anonymize<I9uapdn16emsti>;
    /**
     * See [`Pallet::force_collection_owner`].
     */
    "force_collection_owner": Anonymize<Ie5i0q2glmr0md>;
    /**
     * See [`Pallet::force_collection_config`].
     */
    "force_collection_config": Anonymize<I97qcg6i3l8gee>;
    /**
     * See [`Pallet::approve_transfer`].
     */
    "approve_transfer": Anonymize<Ib5udrahak005b>;
    /**
     * See [`Pallet::cancel_approval`].
     */
    "cancel_approval": Anonymize<Ib92t90p616grb>;
    /**
     * See [`Pallet::clear_all_transfer_approvals`].
     */
    "clear_all_transfer_approvals": Anonymize<Iafkqus0ohh6l6>;
    /**
     * See [`Pallet::lock_item_properties`].
     */
    "lock_item_properties": Anonymize<I1jj31tn29ie3c>;
    /**
     * See [`Pallet::set_attribute`].
     */
    "set_attribute": Anonymize<I5llu6o6a0go5i>;
    /**
     * See [`Pallet::force_set_attribute`].
     */
    "force_set_attribute": Anonymize<Ic8b8561e6t9ie>;
    /**
     * See [`Pallet::clear_attribute`].
     */
    "clear_attribute": Anonymize<I93r2effh7od84>;
    /**
     * See [`Pallet::approve_item_attributes`].
     */
    "approve_item_attributes": Anonymize<Ib92t90p616grb>;
    /**
     * See [`Pallet::cancel_item_attributes_approval`].
     */
    "cancel_item_attributes_approval": Anonymize<I6afd7fllr8otc>;
    /**
     * See [`Pallet::set_metadata`].
     */
    "set_metadata": Anonymize<Icrkms46uh8tpb>;
    /**
     * See [`Pallet::clear_metadata`].
     */
    "clear_metadata": Anonymize<Iafkqus0ohh6l6>;
    /**
     * See [`Pallet::set_collection_metadata`].
     */
    "set_collection_metadata": Anonymize<I78u60nqh0etah>;
    /**
     * See [`Pallet::clear_collection_metadata`].
     */
    "clear_collection_metadata": Anonymize<I6cu7obfo0rr0o>;
    /**
     * See [`Pallet::set_accept_ownership`].
     */
    "set_accept_ownership": Anonymize<Ibqooroq6rr5kr>;
    /**
     * See [`Pallet::set_collection_max_supply`].
     */
    "set_collection_max_supply": Anonymize<I6h88h8vba22v8>;
    /**
     * See [`Pallet::update_mint_settings`].
     */
    "update_mint_settings": Anonymize<I1lso3vlgherue>;
    /**
     * See [`Pallet::set_price`].
     */
    "set_price": Anonymize<Ia9cd4jqb5eecb>;
    /**
     * See [`Pallet::buy_item`].
     */
    "buy_item": Anonymize<I19jiel1ftbcce>;
    /**
     * See [`Pallet::pay_tips`].
     */
    "pay_tips": Anonymize<I26c8p47106toa>;
    /**
     * See [`Pallet::create_swap`].
     */
    "create_swap": Anonymize<Iq82b3qvf20ne>;
    /**
     * See [`Pallet::cancel_swap`].
     */
    "cancel_swap": Anonymize<Ic3j8ku6mbsms4>;
    /**
     * See [`Pallet::claim_swap`].
     */
    "claim_swap": Anonymize<I3nvoqsi8f05ph>;
    /**
     * See [`Pallet::mint_pre_signed`].
     */
    "mint_pre_signed": Anonymize<I3eoft5md071do>;
    /**
     * See [`Pallet::set_attributes_pre_signed`].
     */
    "set_attributes_pre_signed": Anonymize<I923eug653ra0o>;
}>;
export type I43aobns89nbkh = {
    "admin": MultiAddress;
    "config": Anonymize<I72ndo6phms8ik>;
};
export type Iamd7rovec1hfb = {
    "owner": MultiAddress;
    "config": Anonymize<I72ndo6phms8ik>;
};
export type I77ie723ncd4co = {
    "collection": number;
    "witness": {
        "item_metadatas": number;
        "item_configs": number;
        "attributes": number;
    };
};
export type Ieebloeahma3ke = {
    "collection": number;
    "item": number;
    "mint_to": MultiAddress;
    "witness_data"?: ({
        "owned_item"?: Anonymize<I4arjljr6dpflb>;
        "mint_price"?: Anonymize<I35p85j063s0il>;
    }) | undefined;
};
export type I4mbtpf4pu3rec = {
    "collection": number;
    "item": number;
    "mint_to": MultiAddress;
    "item_config": bigint;
};
export type I1ahf3pvgsgbu = {
    "collection": number;
    "lock_settings": bigint;
};
export type I9uapdn16emsti = {
    "collection": number;
    "issuer"?: Anonymize<Ia0jlc0rcbskuk>;
    "admin"?: Anonymize<Ia0jlc0rcbskuk>;
    "freezer"?: Anonymize<Ia0jlc0rcbskuk>;
};
export type I97qcg6i3l8gee = {
    "collection": number;
    "config": Anonymize<I72ndo6phms8ik>;
};
export type Ib5udrahak005b = {
    "collection": number;
    "item": number;
    "delegate": MultiAddress;
    "maybe_deadline"?: Anonymize<I4arjljr6dpflb>;
};
export type Ic8b8561e6t9ie = {
    "set_as"?: Anonymize<Ihfphjolmsqq1>;
    "collection": number;
    "maybe_item"?: Anonymize<I4arjljr6dpflb>;
    "namespace": Anonymize<If3jjadhmug6qc>;
    "key": Binary;
    "value": Binary;
};
export type I6afd7fllr8otc = {
    "collection": number;
    "item": number;
    "delegate": MultiAddress;
    "witness": number;
};
export type I1lso3vlgherue = {
    "collection": number;
    "mint_settings": Anonymize<Ia3s8qquibn97v>;
};
export type I26c8p47106toa = {
    "tips": Array<{
        "collection": number;
        "item": number;
        "receiver": SS58String;
        "amount": bigint;
    }>;
};
export type Iq82b3qvf20ne = {
    "offered_collection": number;
    "offered_item": number;
    "desired_collection": number;
    "maybe_desired_item"?: Anonymize<I4arjljr6dpflb>;
    "maybe_price"?: Anonymize<I6oogc1jbmmi81>;
    "duration": number;
};
export type Ic3j8ku6mbsms4 = {
    "offered_collection": number;
    "offered_item": number;
};
export type I3nvoqsi8f05ph = {
    "send_collection": number;
    "send_item": number;
    "receive_collection": number;
    "receive_item": number;
    "witness_price"?: Anonymize<I6oogc1jbmmi81>;
};
export type I3eoft5md071do = {
    "mint_data": {
        "collection": number;
        "item": number;
        "attributes": Anonymize<I6pi5ou8r1hblk>;
        "metadata": Binary;
        "only_account"?: Anonymize<Ihfphjolmsqq1>;
        "deadline": number;
        "mint_price"?: Anonymize<I35p85j063s0il>;
    };
    "signature": MultiSignature;
    "signer": SS58String;
};
export type MultiSignature = Enum<{
    "Ed25519": FixedSizeBinary<64>;
    "Sr25519": FixedSizeBinary<64>;
    "Ecdsa": FixedSizeBinary<65>;
}>;
export declare const MultiSignature: GetEnum<MultiSignature>;
export type I923eug653ra0o = {
    "data": {
        "collection": number;
        "item": number;
        "attributes": Anonymize<I6pi5ou8r1hblk>;
        "namespace": Anonymize<If3jjadhmug6qc>;
        "deadline": number;
    };
    "signature": MultiSignature;
    "signer": SS58String;
};
export type Ifvhejk3jqqui9 = AnonymousEnum<{
    /**
     * See [`Pallet::create`].
     */
    "create": Anonymize<Ifj5cqlfpn597s>;
    /**
     * See [`Pallet::force_create`].
     */
    "force_create": Anonymize<I66k3d3punogpc>;
    /**
     * See [`Pallet::start_destroy`].
     */
    "start_destroy": Anonymize<Idchecnpr8vnel>;
    /**
     * See [`Pallet::destroy_accounts`].
     */
    "destroy_accounts": Anonymize<Idchecnpr8vnel>;
    /**
     * See [`Pallet::destroy_approvals`].
     */
    "destroy_approvals": Anonymize<Idchecnpr8vnel>;
    /**
     * See [`Pallet::finish_destroy`].
     */
    "finish_destroy": Anonymize<Idchecnpr8vnel>;
    /**
     * See [`Pallet::mint`].
     */
    "mint": Anonymize<Ibornr0s1glri>;
    /**
     * See [`Pallet::burn`].
     */
    "burn": Anonymize<I92nkla4njakpv>;
    /**
     * See [`Pallet::transfer`].
     */
    "transfer": Anonymize<I1gcdprj14fsda>;
    /**
     * See [`Pallet::transfer_keep_alive`].
     */
    "transfer_keep_alive": Anonymize<I1gcdprj14fsda>;
    /**
     * See [`Pallet::force_transfer`].
     */
    "force_transfer": Anonymize<Ibp1vdtkstbc3>;
    /**
     * See [`Pallet::freeze`].
     */
    "freeze": Anonymize<Ibg8u7uiu5rah0>;
    /**
     * See [`Pallet::thaw`].
     */
    "thaw": Anonymize<Ibg8u7uiu5rah0>;
    /**
     * See [`Pallet::freeze_asset`].
     */
    "freeze_asset": Anonymize<Idchecnpr8vnel>;
    /**
     * See [`Pallet::thaw_asset`].
     */
    "thaw_asset": Anonymize<Idchecnpr8vnel>;
    /**
     * See [`Pallet::transfer_ownership`].
     */
    "transfer_ownership": Anonymize<I2bp8p3dql3d1g>;
    /**
     * See [`Pallet::set_team`].
     */
    "set_team": Anonymize<I7j3g1si0o1jk>;
    /**
     * See [`Pallet::set_metadata`].
     */
    "set_metadata": Anonymize<I4ji9aripkmj83>;
    /**
     * See [`Pallet::clear_metadata`].
     */
    "clear_metadata": Anonymize<Idchecnpr8vnel>;
    /**
     * See [`Pallet::force_set_metadata`].
     */
    "force_set_metadata": Anonymize<Ib5t4pl4i1fci0>;
    /**
     * See [`Pallet::force_clear_metadata`].
     */
    "force_clear_metadata": Anonymize<Idchecnpr8vnel>;
    /**
     * See [`Pallet::force_asset_status`].
     */
    "force_asset_status": Anonymize<I9opijbaphgsa4>;
    /**
     * See [`Pallet::approve_transfer`].
     */
    "approve_transfer": Anonymize<I8dqplr44uumpe>;
    /**
     * See [`Pallet::cancel_approval`].
     */
    "cancel_approval": Anonymize<Ibbahpmfslhfd9>;
    /**
     * See [`Pallet::force_cancel_approval`].
     */
    "force_cancel_approval": Anonymize<I26avdtf769r3t>;
    /**
     * See [`Pallet::transfer_approved`].
     */
    "transfer_approved": Anonymize<Ia659v5gfhg1u4>;
    /**
     * See [`Pallet::touch`].
     */
    "touch": Anonymize<Idchecnpr8vnel>;
    /**
     * See [`Pallet::refund`].
     */
    "refund": Anonymize<I3pdlc3jlbrua>;
    /**
     * See [`Pallet::set_min_balance`].
     */
    "set_min_balance": Anonymize<Idames6kvepfl8>;
    /**
     * See [`Pallet::touch_other`].
     */
    "touch_other": Anonymize<Ibg8u7uiu5rah0>;
    /**
     * See [`Pallet::refund_other`].
     */
    "refund_other": Anonymize<Ibg8u7uiu5rah0>;
    /**
     * See [`Pallet::block`].
     */
    "block": Anonymize<Ibg8u7uiu5rah0>;
}>;
export type Ifj5cqlfpn597s = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "admin": MultiAddress;
    "min_balance": bigint;
};
export type I66k3d3punogpc = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "owner": MultiAddress;
    "is_sufficient": boolean;
    "min_balance": bigint;
};
export type Idchecnpr8vnel = {
    "id": Anonymize<Idpatrs8teqg2g>;
};
export type Ibornr0s1glri = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "beneficiary": MultiAddress;
    "amount": bigint;
};
export type I92nkla4njakpv = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "who": MultiAddress;
    "amount": bigint;
};
export type I1gcdprj14fsda = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "target": MultiAddress;
    "amount": bigint;
};
export type Ibp1vdtkstbc3 = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "source": MultiAddress;
    "dest": MultiAddress;
    "amount": bigint;
};
export type Ibg8u7uiu5rah0 = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "who": MultiAddress;
};
export type I2bp8p3dql3d1g = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "owner": MultiAddress;
};
export type I7j3g1si0o1jk = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "issuer": MultiAddress;
    "admin": MultiAddress;
    "freezer": MultiAddress;
};
export type I4ji9aripkmj83 = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "name": Binary;
    "symbol": Binary;
    "decimals": number;
};
export type Ib5t4pl4i1fci0 = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "name": Binary;
    "symbol": Binary;
    "decimals": number;
    "is_frozen": boolean;
};
export type I9opijbaphgsa4 = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "owner": MultiAddress;
    "issuer": MultiAddress;
    "admin": MultiAddress;
    "freezer": MultiAddress;
    "min_balance": bigint;
    "is_sufficient": boolean;
    "is_frozen": boolean;
};
export type I8dqplr44uumpe = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "delegate": MultiAddress;
    "amount": bigint;
};
export type Ibbahpmfslhfd9 = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "delegate": MultiAddress;
};
export type I26avdtf769r3t = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "owner": MultiAddress;
    "delegate": MultiAddress;
};
export type Ia659v5gfhg1u4 = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "owner": MultiAddress;
    "destination": MultiAddress;
    "amount": bigint;
};
export type I3pdlc3jlbrua = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "allow_burn": boolean;
};
export type Idames6kvepfl8 = {
    "id": Anonymize<Idpatrs8teqg2g>;
    "min_balance": bigint;
};
export type Iaqet9jc3ihboe = {
    "header": Anonymize<Ic952bubvq4k7d>;
    "extrinsics": Anonymize<Itom7fk49o0c9>;
};
export type Ic952bubvq4k7d = {
    "parent_hash": FixedSizeBinary<32>;
    "number": number;
    "state_root": FixedSizeBinary<32>;
    "extrinsics_root": FixedSizeBinary<32>;
    "digest": Anonymize<I4mddgoa69c0a2>;
};
export type I37hdfj6084nn6 = ResultPayload<Anonymize<I5fusjs43lh8e6>, TransactionValidityError>;
export type TransactionValidityError = Enum<{
    "Invalid": TransactionValidityInvalidTransaction;
    "Unknown": TransactionValidityUnknownTransaction;
}>;
export declare const TransactionValidityError: GetEnum<TransactionValidityError>;
export type TransactionValidityInvalidTransaction = Enum<{
    "Call": undefined;
    "Payment": undefined;
    "Future": undefined;
    "Stale": undefined;
    "BadProof": undefined;
    "AncientBirthBlock": undefined;
    "ExhaustsResources": undefined;
    "Custom": number;
    "BadMandatory": undefined;
    "MandatoryValidation": undefined;
    "BadSigner": undefined;
}>;
export declare const TransactionValidityInvalidTransaction: GetEnum<TransactionValidityInvalidTransaction>;
export type TransactionValidityUnknownTransaction = Enum<{
    "CannotLookup": undefined;
    "NoUnsignedValidator": undefined;
    "Custom": number;
}>;
export declare const TransactionValidityUnknownTransaction: GetEnum<TransactionValidityUnknownTransaction>;
export type If7uv525tdvv7a = Array<[FixedSizeBinary<8>, Binary]>;
export type I2an1fs2eiebjp = {
    "okay": boolean;
    "fatal_error": boolean;
    "errors": Anonymize<If7uv525tdvv7a>;
};
export type TransactionValidityTransactionSource = Enum<{
    "InBlock": undefined;
    "Local": undefined;
    "External": undefined;
}>;
export declare const TransactionValidityTransactionSource: GetEnum<TransactionValidityTransactionSource>;
export type Iajbob6uln5jct = ResultPayload<{
    "priority": bigint;
    "requires": Anonymize<Itom7fk49o0c9>;
    "provides": Anonymize<Itom7fk49o0c9>;
    "longevity": bigint;
    "propagate": boolean;
}, TransactionValidityError>;
export type Icerf8h8pdu8ss = (Array<[Binary, FixedSizeBinary<4>]>) | undefined;
export type I6spmpef2c7svf = {
    "weight": Anonymize<I4q39t5hn830vp>;
    "class": DispatchClass;
    "partial_fee": bigint;
};
export type Iei2mvq0mjvt81 = {
    "inclusion_fee"?: ({
        "base_fee": bigint;
        "len_fee": bigint;
        "adjusted_weight_fee": bigint;
    }) | undefined;
    "tip": bigint;
};
export type I4or8ectd3dmig = AnonymousEnum<{
    "System": Anonymize<Iccjej82b2j3c5>;
    "ParachainSystem": Anonymize<I3jmip7qjlcqot>;
    "Timestamp": Anonymize<I7d75gqfg6jh9c>;
    "Balances": Anonymize<I1uvhaq3q54bet>;
    "CollatorSelection": Anonymize<I5c9voacr9gah8>;
    "Session": Anonymize<I77dda7hps0u37>;
    "XcmpQueue": Anonymize<I57tqg8fvt7f6m>;
    "PolkadotXcm": Anonymize<Ia6ktlm9tkn8j6>;
    "DmpQueue": Anonymize<I3lfpt1qictomp>;
    "Utility": Anonymize<I30fq4lhv38rfo>;
    "Multisig": Anonymize<Iq50caqjqj483>;
    "Proxy": Anonymize<I525hp2jsp5npm>;
    "Assets": Anonymize<Ideusanoto4b1j>;
    "Uniques": Anonymize<I7g34e4vegl9s4>;
    "Nfts": Anonymize<Iamd15okrnp6oq>;
    "ForeignAssets": Anonymize<Ifvhejk3jqqui9>;
}>;
export type Ich0usrc4sg28j = ResultPayload<Anonymize<Ik93katrmbiat>, Enum<{
    "AssetIdConversionFailed": undefined;
    "AmountToBalanceConversionFailed": undefined;
}>>;
export type Ic1d4u2opv3fst = {
    "upward_messages": Anonymize<Itom7fk49o0c9>;
    "horizontal_messages": Anonymize<I6r5cbv8ttrb09>;
    "new_validation_code"?: Anonymize<Iabpgqcjikia83>;
    "processed_downward_messages": number;
    "hrmp_watermark": number;
    "head_data": Binary;
};
export type Ie9sr1iqcg3cgm = ResultPayload<undefined, string>;
export {};
