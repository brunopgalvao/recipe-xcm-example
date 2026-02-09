import { StorageDescriptor, PlainDescriptor, TxDescriptor, RuntimeDescriptor, Enum, ApisFromDef, QueryFromPalletsDef, TxFromPalletsDef, EventsFromPalletsDef, ErrorsFromPalletsDef, ConstFromPalletsDef, ViewFnsFromPalletsDef, SS58String, FixedSizeBinary, Binary, FixedSizeArray } from "polkadot-api";
import { I5sesotjlssv2d, Iffmde3ekjedi9, I4mddgoa69c0a2, Ia7vmvpm03b3aj, I95g6i7ilua7lq, Ieniouoqkq4icf, Phase, I1v7jbnil3tjns, I8jgj1nhcr2dg8, Ifn6q3equiq9qi, Ia3sb0vgvovhtg, Iav8k1edbj86k7, Itom7fk49o0c9, I4i91h98n3cv1b, I4iumukclgj8ej, Iqnbvitf7a7l3, I6r5cbv8ttrb09, I4q39t5hn830vp, Ibgl04rn6nbfm6, I1q8tnt1cluu5j, I8ds64oj6581v0, Ia7pdug7cdsg8g, I9bin2jc70qt6q, TransactionPaymentReleases, Ia2lhg7l2hilo3, Ifi4da1gej1fri, Ifvgo9568rpmqc, Icgljjb6j82uhn, I82jm9g7pufuel, Ic5m5lp1oioo8r, I6cs1itejju2vv, I9cllvl0tmdeco, I9jd27rnpm8ttv, Ib77b0fp1a6mjr, I5g2vv0ckl2m8b, Ie0cpusdmler9p, I6o3vavku3vjsk, I9us7218h9qeio, I68itkd3tsdg5p, I7vlvrrl2pnbgk, I9osn6oe908bj1, XcmPalletVersionMigrationStage, I78c7o5kd104ql, I165b31dp8f95m, I7csvdmmfnffaq, Iepvrcsdbii2qt, I82vjkits3vc46, Icp9h5ma02v1rg, Iag146hmjgqfgj, I8uo3fpd3bcc6f, I32or1mos65f9o, I9p9lq3rej5bhc, I3qklfjubrljqh, Iag3f1hum3p4c8, I7svnfko10tq2e, I4s6jkha20aoh0, I2brm5b9jij1st, I78s05f59eoi8b, Ianufjuplcj6u4, Id32h28hjj1tch, I6ouflveob4eli, I2mv9dvsaj3kcr, I7781vnk0rm9eq, Ie2iqtdb0stqo1, I5irutptk105do, Ic9nev69d8grv1, I18m6a0sc4k7s9, Ic9iokm15iigt6, I35m96p3u4vl0p, Iapmji0h53pmkn, Idrr42svup341f, I4ugih6gb4fmug, Idac0t49lnd4ls, I72ndo6phms8ik, Idpatrs8teqg2g, Iaohs8th6gln8n, I8mvs9j12ubmkk, In7a38730s6qs, If15el53dd76v9, I9s0ave7t0vnrk, Ic6nglu2db2c36, I8ofcg5rbj0g2c, I4adgbll7gku4i, I6pjjpfvhvcfru, I9pj91mj79qekl, I39uah9nss64h9, Ik64dknsq7k08, I60v7bikk54tpu, Ifpj261e8s63m3, Idcr6u6361oad9, I4ktuaksf5i1gk, I9bqtpv2ii35mp, I9j7pagd6d4bda, I2h9pmio37r7fb, Ibmr18suc9ikh9, I9iq22t0burs89, Ifccifqltb5obi, Iadtsfv699cq8b, Ialpmgmhr3gk5r, I4cbvqmqadhrea, I81vt5eq60l4b6, Iab1retd4gg4q1, I3vh014cqgmrfd, I2tni7rrb2buqm, I177omkp0t3av4, I561t4i7oneora, Ia8um7upnt2t99, I44pbivm2pe7qc, Ic76kfh5ebqkpl, I8nm9vc7o6er85, I5up1l6nq7b3hn, Ibgm4rnf22lal1, Idui8q47jf1fh0, I2tmmvssg2vf28, Icboh8usno3nth, Ic5jsm6t6f5d2b, I8qbpoatnebb1p, Ic7cq8vbb84auq, Ideaemvoneh309, I3d9o9d7epp66v, Ibd8tfruce82ld, Iovrcu9bfelfq, Iefr8jgtgfk8um, I3j05hul54uj7q, I2eb501t8s6hsq, Ianmuoljk2sk1u, I2ptedi00tj9mc, Ic357tcepuvo5c, I2rnoam876ruhj, Ic5b47dj4coa3r, Ib3qnc19gu633c, Ifira6u9hi7cu1, I72tqocvdoqfff, I2i27f3sfmvc05, I1nlrtd1epki2d, I3abtumcmempjs, Id81m8flopt8ha, I8hff7chabggkd, I49i39mtj1ivbs, Ifkr2kcak2vto1, I1ju6r8q0cs9jt, I4kpeq6j7cd5bu, I5na1ka76k6811, I59mhdb9omdqfa, I9vl5kpk0fpakt, I717jt61hu19b4, If66ivi02f7256, I223jtcatlfkrc, I223jg78mng8hq, I4iiuiftkpq3fd, Ibra6533h92c0a, Ibgvkh96s68a66, If9vko7pv0231m, Iafkqus0ohh6l6, I6cu7obfo0rr0o, Ie5i0q2glmr0md, I1ap9tlenhr44l, Ib92t90p616grb, Ieipuujd6879do, Ie56eq9sg1rsoc, I5tvvgui05tn6e, Ibal0joadvdc2h, Iceq9fmmp9aeqv, I9viqhmdtuof5e, Ibqooroq6rr5kr, I6h88h8vba22v8, Ia9cd4jqb5eecb, I19jiel1ftbcce, I43aobns89nbkh, Iamd7rovec1hfb, I77ie723ncd4co, Ieebloeahma3ke, I4mbtpf4pu3rec, I1ahf3pvgsgbu, I9uapdn16emsti, I97qcg6i3l8gee, Ib5udrahak005b, I1jj31tn29ie3c, I5llu6o6a0go5i, Ic8b8561e6t9ie, I93r2effh7od84, I6afd7fllr8otc, Icrkms46uh8tpb, I78u60nqh0etah, I1lso3vlgherue, I26c8p47106toa, Iq82b3qvf20ne, Ic3j8ku6mbsms4, I3nvoqsi8f05ph, I3eoft5md071do, I923eug653ra0o, Ifj5cqlfpn597s, I66k3d3punogpc, Idchecnpr8vnel, Ibornr0s1glri, I92nkla4njakpv, I1gcdprj14fsda, Ibp1vdtkstbc3, Ibg8u7uiu5rah0, I2bp8p3dql3d1g, I7j3g1si0o1jk, I4ji9aripkmj83, Ib5t4pl4i1fci0, I9opijbaphgsa4, I8dqplr44uumpe, Ibbahpmfslhfd9, I26avdtf769r3t, Ia659v5gfhg1u4, I3pdlc3jlbrua, Idames6kvepfl8, Ia82mnkmeo2rhc, I3ehp1l633mpva, Icbccs0ug47ilf, I855j4i3kr8ko1, Idd7hd99u0ho0n, Ib51vk42m1po4n, Iafscmv8tjf0ou, I100l07kaehdlp, I6gnbnvip5vvdi, Icv68aq8841478, Ic262ibdoec56a, Iflcfm9b6nlmdd, Ijrsf4mnp3eka, Id5fm4p8lj5qgi, I8tjvj9uq4b7hi, I3qt1hgg4djhgb, Ier2cke86dqbr2, I94ss5ias99t8d, I39t01nnod9109, I6v8sm60vvkmk7, I1qmtmbe5so8r3, Ih99m6ehpcar7, Idgorhsbgdq2ap, I2hq50pu2kdjpo, I2650grdiibijj, I5q96bb8stug61, I137t1cld92pod, If8b64mo2bodj0, Icu5p58ltu1veo, Ifmqhv1oc3rh3, Ia37keupp0t7n6, Iel50id65eke1v, I9s1ksje8tscgp, I2uqmls7kcdnii, Idg69klialbkb8, I6ama1doqn7ush, I30pg328m00nr3, I2on6pi7n0k0ik, Iduq5i0c15rc0o, I75o78kjj6nl2u, Ien06stpa519em, I13106a549td2f, Icti9s23lkm0qj, Iemrprej97cn2e, I2c8bkmorso999, I2gfpd8ikmku31, Iadf1uv6agh6rp, If4e6jvgfn13rl, Ise9gq7rqlnvm, I36a1f0tvpm2vl, I4u5n3f2atceoo, Ib9umvo53pgk1d, Iep27ialq4a7o7, Iasu5jvoqr43mv, Ib1v1gumfn2q1t, I5qolde99acmd1, Ie7cuj84ohvg56, I2ur0oeqg495j8, I8ioopvokvl3ud, I88ff3u4dpivk, I33cp947glv1ks, Ic9om1gmmqu7rq, I5hfov2b68ppb6, Ibthhb2m9vneds, Iaitn5bqfacj7k, If4ebvclj2ugvi, Ia5le7udkgbaq9, Ieduc1e6frq8rb, I9h6gbtabovtm4, Ifnsa0dkkpf465, I65dtqr2egjbc3, Ibqj3vg5s5lk0c, I6l73u513p8rna, Iefqmt2htu1dlu, If8bgtgqrchjtu, I9gqanbbbe917p, Id1m1230297f7a, Ifvb1p5munhhv4, I46h83ilqeed3g, Icahse3uoi76n7, I75sj3uv7gnemk, I5fjkvcb5vr6nb, I2gr1toekv86b9, I2v2ikqt2trp52, If3057hi1g5qlo, Iaii5qf41d5n3d, Ico8bnjc6taa27, I78i1bvlonei69, I9i1f9mrso1hmf, I9ksla2si91s56, Id9j7b85otvjru, Iaihk9pek2ajl9, Id9av23h47ufb2, Ib4kpnijas4jqp, I2vnu5k0u1i65h, Iecal8oi5f04ge, Ic05ktr2oct1nn, Ickf73l1j0hdnb, Idet6j426d5cht, I40a0s39fbkvmt, I82eq5jun2ru6g, Iff9hjdvtonbq4, I6liad1b2v1j3a, I9h5hjufd36pl5, I3tc6ks4ntde0e, Ift3nn9q4s5dc6, I9ll5ddutb9ikt, I304o4std85kum, I867k91d2log1e, Ica75ao8v192b0, Ie3uql8p3fhpub, Iaqet9jc3ihboe, Ic952bubvq4k7d, Iabpgqcjikia83, I37hdfj6084nn6, If7uv525tdvv7a, I2an1fs2eiebjp, TransactionValidityTransactionSource, Iajbob6uln5jct, Icerf8h8pdu8ss, I6spmpef2c7svf, Iei2mvq0mjvt81, I4or8ectd3dmig, Ich0usrc4sg28j, Ic1d4u2opv3fst, Ie9sr1iqcg3cgm, I55o1f0t1icsot } from "./common-types";
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
type IStorage = {
    System: {
        /**
         * The full account information for a particular account ID.
         */
        Account: StorageDescriptor<[Key: SS58String], Anonymize<I5sesotjlssv2d>, false, never>;
        /**
         * Total extrinsics count for the current block.
         */
        ExtrinsicCount: StorageDescriptor<[], number, true, never>;
        /**
         * The current weight for the block.
         */
        BlockWeight: StorageDescriptor<[], Anonymize<Iffmde3ekjedi9>, false, never>;
        /**
         * Total length (in bytes) for all extrinsics put together, for the current block.
         */
        AllExtrinsicsLen: StorageDescriptor<[], number, true, never>;
        /**
         * Map of block numbers to block hashes.
         */
        BlockHash: StorageDescriptor<[Key: number], FixedSizeBinary<32>, false, never>;
        /**
         * Extrinsics data for the current block (maps an extrinsic's index to its data).
         */
        ExtrinsicData: StorageDescriptor<[Key: number], Binary, false, never>;
        /**
         * The current block number being processed. Set by `execute_block`.
         */
        Number: StorageDescriptor<[], number, false, never>;
        /**
         * Hash of the previous block.
         */
        ParentHash: StorageDescriptor<[], FixedSizeBinary<32>, false, never>;
        /**
         * Digest of the current block, also part of the block header.
         */
        Digest: StorageDescriptor<[], Anonymize<I4mddgoa69c0a2>, false, never>;
        /**
         * Events deposited for the current block.
         *
         * NOTE: The item is unbound and should therefore never be read on chain.
         * It could otherwise inflate the PoV size of a block.
         *
         * Events have a large in-memory size. Box the events to not go out-of-memory
         * just in case someone still reads them from within the runtime.
         */
        Events: StorageDescriptor<[], Anonymize<Ia7vmvpm03b3aj>, false, never>;
        /**
         * The number of events in the `Events<T>` list.
         */
        EventCount: StorageDescriptor<[], number, false, never>;
        /**
         * Mapping between a topic (represented by T::Hash) and a vector of indexes
         * of events in the `<Events<T>>` list.
         *
         * All topic vectors have deterministic storage locations depending on the topic. This
         * allows light-clients to leverage the changes trie storage tracking mechanism and
         * in case of changes fetch the list of events of interest.
         *
         * The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
         * the `EventIndex` then in case if the topic has the same contents on the next block
         * no notification will be triggered thus the event might be lost.
         */
        EventTopics: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I95g6i7ilua7lq>, false, never>;
        /**
         * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
         */
        LastRuntimeUpgrade: StorageDescriptor<[], Anonymize<Ieniouoqkq4icf>, true, never>;
        /**
         * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
         */
        UpgradedToU32RefCount: StorageDescriptor<[], boolean, false, never>;
        /**
         * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
         * (default) if not.
         */
        UpgradedToTripleRefCount: StorageDescriptor<[], boolean, false, never>;
        /**
         * The execution phase of the block.
         */
        ExecutionPhase: StorageDescriptor<[], Phase, true, never>;
    };
    ParachainSystem: {
        /**
         * Latest included block descendants the runtime accepted. In other words, these are
         * ancestors of the currently executing block which have not been included in the observed
         * relay-chain state.
         *
         * The segment length is limited by the capacity returned from the [`ConsensusHook`] configured
         * in the pallet.
         */
        UnincludedSegment: StorageDescriptor<[], Anonymize<I1v7jbnil3tjns>, false, never>;
        /**
         * Storage field that keeps track of bandwidth used by the unincluded segment along with the
         * latest HRMP watermark. Used for limiting the acceptance of new blocks with
         * respect to relay chain constraints.
         */
        AggregatedUnincludedSegment: StorageDescriptor<[], Anonymize<I8jgj1nhcr2dg8>, true, never>;
        /**
         * In case of a scheduled upgrade, this storage field contains the validation code to be
         * applied.
         *
         * As soon as the relay chain gives us the go-ahead signal, we will overwrite the
         * [`:code`][sp_core::storage::well_known_keys::CODE] which will result the next block process
         * with the new validation code. This concludes the upgrade process.
         */
        PendingValidationCode: StorageDescriptor<[], Binary, false, never>;
        /**
         * Validation code that is set by the parachain and is to be communicated to collator and
         * consequently the relay-chain.
         *
         * This will be cleared in `on_initialize` of each new block if no other pallet already set
         * the value.
         */
        NewValidationCode: StorageDescriptor<[], Binary, true, never>;
        /**
         * The [`PersistedValidationData`] set for this block.
         * This value is expected to be set only once per block and it's never stored
         * in the trie.
         */
        ValidationData: StorageDescriptor<[], Anonymize<Ifn6q3equiq9qi>, true, never>;
        /**
         * Were the validation data set to notify the relay chain?
         */
        DidSetValidationCode: StorageDescriptor<[], boolean, false, never>;
        /**
         * The relay chain block number associated with the last parachain block.
         *
         * This is updated in `on_finalize`.
         */
        LastRelayChainBlockNumber: StorageDescriptor<[], number, false, never>;
        /**
         * An option which indicates if the relay-chain restricts signalling a validation code upgrade.
         * In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
         * candidate will be invalid.
         *
         * This storage item is a mirror of the corresponding value for the current parachain from the
         * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
         * set after the inherent.
         */
        UpgradeRestrictionSignal: StorageDescriptor<[], Anonymize<Ia3sb0vgvovhtg>, false, never>;
        /**
         * Optional upgrade go-ahead signal from the relay-chain.
         *
         * This storage item is a mirror of the corresponding value for the current parachain from the
         * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
         * set after the inherent.
         */
        UpgradeGoAhead: StorageDescriptor<[], Anonymize<Iav8k1edbj86k7>, false, never>;
        /**
         * The state proof for the last relay parent block.
         *
         * This field is meant to be updated each block with the validation data inherent. Therefore,
         * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
         *
         * This data is also absent from the genesis.
         */
        RelayStateProof: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, true, never>;
        /**
         * The snapshot of some state related to messaging relevant to the current parachain as per
         * the relay parent.
         *
         * This field is meant to be updated each block with the validation data inherent. Therefore,
         * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
         *
         * This data is also absent from the genesis.
         */
        RelevantMessagingState: StorageDescriptor<[], Anonymize<I4i91h98n3cv1b>, true, never>;
        /**
         * The parachain host configuration that was obtained from the relay parent.
         *
         * This field is meant to be updated each block with the validation data inherent. Therefore,
         * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
         *
         * This data is also absent from the genesis.
         */
        HostConfiguration: StorageDescriptor<[], Anonymize<I4iumukclgj8ej>, true, never>;
        /**
         * The last downward message queue chain head we have observed.
         *
         * This value is loaded before and saved after processing inbound downward messages carried
         * by the system inherent.
         */
        LastDmqMqcHead: StorageDescriptor<[], FixedSizeBinary<32>, false, never>;
        /**
         * The message queue chain heads we have observed per each channel incoming channel.
         *
         * This value is loaded before and saved after processing inbound downward messages carried
         * by the system inherent.
         */
        LastHrmpMqcHeads: StorageDescriptor<[], Anonymize<Iqnbvitf7a7l3>, false, never>;
        /**
         * Number of downward messages processed in a block.
         *
         * This will be cleared in `on_initialize` of each new block.
         */
        ProcessedDownwardMessages: StorageDescriptor<[], number, false, never>;
        /**
         * HRMP watermark that was set in a block.
         *
         * This will be cleared in `on_initialize` of each new block.
         */
        HrmpWatermark: StorageDescriptor<[], number, false, never>;
        /**
         * HRMP messages that were sent in a block.
         *
         * This will be cleared in `on_initialize` of each new block.
         */
        HrmpOutboundMessages: StorageDescriptor<[], Anonymize<I6r5cbv8ttrb09>, false, never>;
        /**
         * Upward messages that were sent in a block.
         *
         * This will be cleared in `on_initialize` of each new block.
         */
        UpwardMessages: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false, never>;
        /**
         * Upward messages that are still pending and not yet send to the relay chain.
         */
        PendingUpwardMessages: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false, never>;
        /**
         * The factor to multiply the base delivery fee by for UMP.
         */
        UpwardDeliveryFeeFactor: StorageDescriptor<[], bigint, false, never>;
        /**
         * The number of HRMP messages we observed in `on_initialize` and thus used that number for
         * announcing the weight of `on_initialize` and `on_finalize`.
         */
        AnnouncedHrmpMessagesPerCandidate: StorageDescriptor<[], number, false, never>;
        /**
         * The weight we reserve at the beginning of the block for processing XCMP messages. This
         * overrides the amount set in the Config trait.
         */
        ReservedXcmpWeightOverride: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, true, never>;
        /**
         * The weight we reserve at the beginning of the block for processing DMP messages. This
         * overrides the amount set in the Config trait.
         */
        ReservedDmpWeightOverride: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, true, never>;
        /**
         * The next authorized upgrade, if there is one.
         */
        AuthorizedUpgrade: StorageDescriptor<[], Anonymize<Ibgl04rn6nbfm6>, true, never>;
        /**
         * A custom head data that should be returned as result of `validate_block`.
         *
         * See `Pallet::set_custom_validation_head_data` for more information.
         */
        CustomValidationHeadData: StorageDescriptor<[], Binary, true, never>;
    };
    Timestamp: {
        /**
         * The current time for the current block.
         */
        Now: StorageDescriptor<[], bigint, false, never>;
        /**
         * Whether the timestamp has been updated in this block.
         *
         * This value is updated to `true` upon successful submission of a timestamp by a node.
         * It is then checked at the end of each block execution in the `on_finalize` hook.
         */
        DidUpdate: StorageDescriptor<[], boolean, false, never>;
    };
    ParachainInfo: {
        /**
        
         */
        ParachainId: StorageDescriptor<[], number, false, never>;
    };
    Balances: {
        /**
         * The total units issued in the system.
         */
        TotalIssuance: StorageDescriptor<[], bigint, false, never>;
        /**
         * The total units of outstanding deactivated balance in the system.
         */
        InactiveIssuance: StorageDescriptor<[], bigint, false, never>;
        /**
         * The Balances pallet example of storing the balance of an account.
         *
         * # Example
         *
         * ```nocompile
         * impl pallet_balances::Config for Runtime {
         * type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
         * }
         * ```
         *
         * You can also store the balance of an account in the `System` pallet.
         *
         * # Example
         *
         * ```nocompile
         * impl pallet_balances::Config for Runtime {
         * type AccountStore = System
         * }
         * ```
         *
         * But this comes with tradeoffs, storing account balances in the system pallet stores
         * `frame_system` data alongside the account data contrary to storing account balances in the
         * `Balances` pallet, which uses a `StorageMap` to store balances data only.
         * NOTE: This is only used in the case that this pallet is used to store balances.
         */
        Account: StorageDescriptor<[Key: SS58String], Anonymize<I1q8tnt1cluu5j>, false, never>;
        /**
         * Any liquidity locks on some account balances.
         * NOTE: Should only be accessed when setting, changing and freeing a lock.
         */
        Locks: StorageDescriptor<[Key: SS58String], Anonymize<I8ds64oj6581v0>, false, never>;
        /**
         * Named reserves on some account balances.
         */
        Reserves: StorageDescriptor<[Key: SS58String], Anonymize<Ia7pdug7cdsg8g>, false, never>;
        /**
         * Holds on account balances.
         */
        Holds: StorageDescriptor<[Key: SS58String], Anonymize<I9bin2jc70qt6q>, false, never>;
        /**
         * Freeze locks on account balances.
         */
        Freezes: StorageDescriptor<[Key: SS58String], Anonymize<I9bin2jc70qt6q>, false, never>;
    };
    TransactionPayment: {
        /**
        
         */
        NextFeeMultiplier: StorageDescriptor<[], bigint, false, never>;
        /**
        
         */
        StorageVersion: StorageDescriptor<[], TransactionPaymentReleases, false, never>;
    };
    Authorship: {
        /**
         * Author of current block.
         */
        Author: StorageDescriptor<[], SS58String, true, never>;
    };
    CollatorSelection: {
        /**
         * The invulnerable, permissioned collators. This list must be sorted.
         */
        Invulnerables: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false, never>;
        /**
         * The (community, limited) collation candidates. `Candidates` and `Invulnerables` should be
         * mutually exclusive.
         */
        Candidates: StorageDescriptor<[], Anonymize<Ifi4da1gej1fri>, false, never>;
        /**
         * Last block authored by collator.
         */
        LastAuthoredBlock: StorageDescriptor<[Key: SS58String], number, false, never>;
        /**
         * Desired number of candidates.
         *
         * This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
         */
        DesiredCandidates: StorageDescriptor<[], number, false, never>;
        /**
         * Fixed amount to deposit to become a collator.
         *
         * When a collator calls `leave_intent` they immediately receive the deposit back.
         */
        CandidacyBond: StorageDescriptor<[], bigint, false, never>;
    };
    Session: {
        /**
         * The current set of validators.
         */
        Validators: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false, never>;
        /**
         * Current index of the session.
         */
        CurrentIndex: StorageDescriptor<[], number, false, never>;
        /**
         * True if the underlying economic identities or weighting behind the validators
         * has changed in the queued validator set.
         */
        QueuedChanged: StorageDescriptor<[], boolean, false, never>;
        /**
         * The queued keys for the next session. When the next session begins, these keys
         * will be used to determine the validator's session keys.
         */
        QueuedKeys: StorageDescriptor<[], Anonymize<Ifvgo9568rpmqc>, false, never>;
        /**
         * Indices of disabled validators.
         *
         * The vec is always kept sorted so that we can find whether a given validator is
         * disabled using binary search. It gets cleared when `on_session_ending` returns
         * a new set of identities.
         */
        DisabledValidators: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false, never>;
        /**
         * The next session keys for a validator.
         */
        NextKeys: StorageDescriptor<[Key: SS58String], FixedSizeBinary<32>, true, never>;
        /**
         * The owner of a key. The key is the `KeyTypeId` + the encoded key.
         */
        KeyOwner: StorageDescriptor<[Key: Anonymize<I82jm9g7pufuel>], SS58String, true, never>;
    };
    Aura: {
        /**
         * The current authority set.
         */
        Authorities: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false, never>;
        /**
         * The current slot of this block.
         *
         * This will be set in `on_initialize`.
         */
        CurrentSlot: StorageDescriptor<[], bigint, false, never>;
    };
    AuraExt: {
        /**
         * Serves as cache for the authorities.
         *
         * The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
         * but we require the old authorities to verify the seal when validating a PoV. This will
         * always be updated to the latest AuRa authorities in `on_finalize`.
         */
        Authorities: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false, never>;
        /**
         * Current slot paired with a number of authored blocks.
         *
         * Updated on each block initialization.
         */
        SlotInfo: StorageDescriptor<[], Anonymize<I6cs1itejju2vv>, true, never>;
    };
    XcmpQueue: {
        /**
         * Status of the inbound XCMP channels.
         */
        InboundXcmpStatus: StorageDescriptor<[], Anonymize<I9cllvl0tmdeco>, false, never>;
        /**
         * Inbound aggregate XCMP messages. It can only be one per ParaId/block.
         */
        InboundXcmpMessages: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Binary, false, never>;
        /**
         * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
         * and last outbound message. If the two indices are equal, then it indicates an empty
         * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
         * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
         * case of the need to send a high-priority signal message this block.
         * The bool is true if there is a signal message waiting to be sent.
         */
        OutboundXcmpStatus: StorageDescriptor<[], Anonymize<Ib77b0fp1a6mjr>, false, never>;
        /**
         * The messages outbound in a given XCMP channel.
         */
        OutboundXcmpMessages: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Binary, false, never>;
        /**
         * Any signal messages waiting to be sent.
         */
        SignalMessages: StorageDescriptor<[Key: number], Binary, false, never>;
        /**
         * The configuration which controls the dynamics of the outbound queue.
         */
        QueueConfig: StorageDescriptor<[], Anonymize<Ie0cpusdmler9p>, false, never>;
        /**
         * The messages that exceeded max individual message weight budget.
         *
         * These message stay in this storage map until they are manually dispatched via
         * `service_overweight`.
         */
        Overweight: StorageDescriptor<[Key: bigint], Anonymize<I6o3vavku3vjsk>, true, never>;
        /**
         * Counter for the related counted storage map
         */
        CounterForOverweight: StorageDescriptor<[], number, false, never>;
        /**
         * The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
         * available free overweight index.
         */
        OverweightCount: StorageDescriptor<[], bigint, false, never>;
        /**
         * Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
         */
        QueueSuspended: StorageDescriptor<[], boolean, false, never>;
        /**
         * The factor to multiply the base delivery fee by.
         */
        DeliveryFeeFactor: StorageDescriptor<[Key: number], bigint, false, never>;
    };
    PolkadotXcm: {
        /**
         * The latest available query index.
         */
        QueryCounter: StorageDescriptor<[], bigint, false, never>;
        /**
         * The ongoing queries.
         */
        Queries: StorageDescriptor<[Key: bigint], Anonymize<I9us7218h9qeio>, true, never>;
        /**
         * The existing asset traps.
         *
         * Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
         * times this pair has been trapped (usually just 1 if it exists at all).
         */
        AssetTraps: StorageDescriptor<[Key: FixedSizeBinary<32>], number, false, never>;
        /**
         * Default version to encode XCM when latest version of destination is unknown. If `None`,
         * then the destinations whose XCM version is unknown are considered unreachable.
         */
        SafeXcmVersion: StorageDescriptor<[], number, true, never>;
        /**
         * The Latest versions that we know various locations support.
         */
        SupportedVersion: StorageDescriptor<Anonymize<I68itkd3tsdg5p>, number, true, never>;
        /**
         * All locations that we have requested version notifications from.
         */
        VersionNotifiers: StorageDescriptor<Anonymize<I68itkd3tsdg5p>, bigint, true, never>;
        /**
         * The target locations that are subscribed to our version changes, as well as the most recent
         * of our versions we informed them of.
         */
        VersionNotifyTargets: StorageDescriptor<Anonymize<I68itkd3tsdg5p>, Anonymize<I7vlvrrl2pnbgk>, true, never>;
        /**
         * Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
         * the `u32` counter is the number of times that a send to the destination has been attempted,
         * which is used as a prioritization.
         */
        VersionDiscoveryQueue: StorageDescriptor<[], Anonymize<I9osn6oe908bj1>, false, never>;
        /**
         * The current migration's stage, if any.
         */
        CurrentMigration: StorageDescriptor<[], XcmPalletVersionMigrationStage, true, never>;
        /**
         * Fungible assets which we know are locked on a remote chain.
         */
        RemoteLockedFungibles: StorageDescriptor<Anonymize<I165b31dp8f95m>, Anonymize<I78c7o5kd104ql>, true, never>;
        /**
         * Fungible assets which we know are locked on this chain.
         */
        LockedFungibles: StorageDescriptor<[Key: SS58String], Anonymize<I7csvdmmfnffaq>, true, never>;
        /**
         * Global suspension state of the XCM executor.
         */
        XcmExecutionSuspended: StorageDescriptor<[], boolean, false, never>;
    };
    DmpQueue: {
        /**
         * The configuration.
         */
        Configuration: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, false, never>;
        /**
         * The page index.
         */
        PageIndex: StorageDescriptor<[], Anonymize<Iepvrcsdbii2qt>, false, never>;
        /**
         * The queue pages.
         */
        Pages: StorageDescriptor<[Key: number], Anonymize<I82vjkits3vc46>, false, never>;
        /**
         * The overweight messages.
         */
        Overweight: StorageDescriptor<[Key: bigint], Anonymize<Icp9h5ma02v1rg>, true, never>;
        /**
         * Counter for the related counted storage map
         */
        CounterForOverweight: StorageDescriptor<[], number, false, never>;
    };
    Multisig: {
        /**
         * The set of open multisig operations.
         */
        Multisigs: StorageDescriptor<Anonymize<I8uo3fpd3bcc6f>, Anonymize<Iag146hmjgqfgj>, true, never>;
    };
    Proxy: {
        /**
         * The set of account proxies. Maps the account which has delegated to the accounts
         * which are being delegated to, together with the amount held on deposit.
         */
        Proxies: StorageDescriptor<[Key: SS58String], Anonymize<I32or1mos65f9o>, false, never>;
        /**
         * The announcements made by the proxy (key).
         */
        Announcements: StorageDescriptor<[Key: SS58String], Anonymize<I9p9lq3rej5bhc>, false, never>;
    };
    Assets: {
        /**
         * Details of an asset.
         */
        Asset: StorageDescriptor<[Key: number], Anonymize<I3qklfjubrljqh>, true, never>;
        /**
         * The holdings of a specific account for a specific asset.
         */
        Account: StorageDescriptor<Anonymize<I7svnfko10tq2e>, Anonymize<Iag3f1hum3p4c8>, true, never>;
        /**
         * Approved balance transfers. First balance is the amount approved for transfer. Second
         * is the amount of `T::Currency` reserved for storing this.
         * First key is the asset ID, second key is the owner and third key is the delegate.
         */
        Approvals: StorageDescriptor<Anonymize<I2brm5b9jij1st>, Anonymize<I4s6jkha20aoh0>, true, never>;
        /**
         * Metadata of an asset.
         */
        Metadata: StorageDescriptor<[Key: number], Anonymize<I78s05f59eoi8b>, false, never>;
    };
    Uniques: {
        /**
         * Details of a collection.
         */
        Class: StorageDescriptor<[Key: number], Anonymize<Ianufjuplcj6u4>, true, never>;
        /**
         * The collection, if any, of which an account is willing to take ownership.
         */
        OwnershipAcceptance: StorageDescriptor<[Key: SS58String], number, true, never>;
        /**
         * The items held by any given account; set out this way so that items owned by a single
         * account can be enumerated.
         */
        Account: StorageDescriptor<Anonymize<Id32h28hjj1tch>, null, true, never>;
        /**
         * The collections owned by any given account; set out this way so that collections owned by
         * a single account can be enumerated.
         */
        ClassAccount: StorageDescriptor<Anonymize<I6ouflveob4eli>, null, true, never>;
        /**
         * The items in existence and their ownership details.
         */
        Asset: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<I2mv9dvsaj3kcr>, true, never>;
        /**
         * Metadata of a collection.
         */
        ClassMetadataOf: StorageDescriptor<[Key: number], Anonymize<I7781vnk0rm9eq>, true, never>;
        /**
         * Metadata of an item.
         */
        InstanceMetadataOf: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<I7781vnk0rm9eq>, true, never>;
        /**
         * Attributes of a collection.
         */
        Attribute: StorageDescriptor<Anonymize<I5irutptk105do>, Anonymize<Ie2iqtdb0stqo1>, true, never>;
        /**
         * Price of an asset instance.
         */
        ItemPriceOf: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<Ic9nev69d8grv1>, true, never>;
        /**
         * Keeps track of the number of items a collection might have.
         */
        CollectionMaxSupply: StorageDescriptor<[Key: number], number, true, never>;
    };
    Nfts: {
        /**
         * Details of a collection.
         */
        Collection: StorageDescriptor<[Key: number], Anonymize<I18m6a0sc4k7s9>, true, never>;
        /**
         * The collection, if any, of which an account is willing to take ownership.
         */
        OwnershipAcceptance: StorageDescriptor<[Key: SS58String], number, true, never>;
        /**
         * The items held by any given account; set out this way so that items owned by a single
         * account can be enumerated.
         */
        Account: StorageDescriptor<Anonymize<Id32h28hjj1tch>, null, true, never>;
        /**
         * The collections owned by any given account; set out this way so that collections owned by
         * a single account can be enumerated.
         */
        CollectionAccount: StorageDescriptor<Anonymize<I6ouflveob4eli>, null, true, never>;
        /**
         * The items in existence and their ownership details.
         * Stores collection roles as per account.
         */
        CollectionRoleOf: StorageDescriptor<Anonymize<I7svnfko10tq2e>, number, true, never>;
        /**
         * The items in existence and their ownership details.
         */
        Item: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<Ic9iokm15iigt6>, true, never>;
        /**
         * Metadata of a collection.
         */
        CollectionMetadataOf: StorageDescriptor<[Key: number], Anonymize<I35m96p3u4vl0p>, true, never>;
        /**
         * Metadata of an item.
         */
        ItemMetadataOf: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<Iapmji0h53pmkn>, true, never>;
        /**
         * Attributes of a collection.
         */
        Attribute: StorageDescriptor<Anonymize<I4ugih6gb4fmug>, Anonymize<Idrr42svup341f>, true, never>;
        /**
         * A price of an item.
         */
        ItemPriceOf: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<Ic9nev69d8grv1>, true, never>;
        /**
         * Item attribute approvals.
         */
        ItemAttributesApprovalsOf: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<Ia2lhg7l2hilo3>, false, never>;
        /**
         * Stores the `CollectionId` that is going to be used for the next collection.
         * This gets incremented whenever a new collection is created.
         */
        NextCollectionId: StorageDescriptor<[], number, true, never>;
        /**
         * Handles all the pending swaps.
         */
        PendingSwapOf: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<Idac0t49lnd4ls>, true, never>;
        /**
         * Config of a collection.
         */
        CollectionConfigOf: StorageDescriptor<[Key: number], Anonymize<I72ndo6phms8ik>, true, never>;
        /**
         * Config of an item.
         */
        ItemConfigOf: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, bigint, true, never>;
    };
    ForeignAssets: {
        /**
         * Details of an asset.
         */
        Asset: StorageDescriptor<[Key: Anonymize<Idpatrs8teqg2g>], Anonymize<I3qklfjubrljqh>, true, never>;
        /**
         * The holdings of a specific account for a specific asset.
         */
        Account: StorageDescriptor<Anonymize<Iaohs8th6gln8n>, Anonymize<Iag3f1hum3p4c8>, true, never>;
        /**
         * Approved balance transfers. First balance is the amount approved for transfer. Second
         * is the amount of `T::Currency` reserved for storing this.
         * First key is the asset ID, second key is the owner and third key is the delegate.
         */
        Approvals: StorageDescriptor<Anonymize<I8mvs9j12ubmkk>, Anonymize<I4s6jkha20aoh0>, true, never>;
        /**
         * Metadata of an asset.
         */
        Metadata: StorageDescriptor<[Key: Anonymize<Idpatrs8teqg2g>], Anonymize<I78s05f59eoi8b>, false, never>;
    };
};
type ICalls = {
    System: {
        /**
         * See [`Pallet::remark`].
         */
        remark: TxDescriptor<Anonymize<I8ofcg5rbj0g2c>>;
        /**
         * See [`Pallet::set_heap_pages`].
         */
        set_heap_pages: TxDescriptor<Anonymize<I4adgbll7gku4i>>;
        /**
         * See [`Pallet::set_code`].
         */
        set_code: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
        /**
         * See [`Pallet::set_code_without_checks`].
         */
        set_code_without_checks: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
        /**
         * See [`Pallet::set_storage`].
         */
        set_storage: TxDescriptor<Anonymize<I9pj91mj79qekl>>;
        /**
         * See [`Pallet::kill_storage`].
         */
        kill_storage: TxDescriptor<Anonymize<I39uah9nss64h9>>;
        /**
         * See [`Pallet::kill_prefix`].
         */
        kill_prefix: TxDescriptor<Anonymize<Ik64dknsq7k08>>;
        /**
         * See [`Pallet::remark_with_event`].
         */
        remark_with_event: TxDescriptor<Anonymize<I8ofcg5rbj0g2c>>;
    };
    ParachainSystem: {
        /**
         * See [`Pallet::set_validation_data`].
         */
        set_validation_data: TxDescriptor<Anonymize<I60v7bikk54tpu>>;
        /**
         * See [`Pallet::sudo_send_upward_message`].
         */
        sudo_send_upward_message: TxDescriptor<Anonymize<Ifpj261e8s63m3>>;
        /**
         * See [`Pallet::authorize_upgrade`].
         */
        authorize_upgrade: TxDescriptor<Anonymize<Ibgl04rn6nbfm6>>;
        /**
         * See [`Pallet::enact_authorized_upgrade`].
         */
        enact_authorized_upgrade: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
    };
    Timestamp: {
        /**
         * See [`Pallet::set`].
         */
        set: TxDescriptor<Anonymize<Idcr6u6361oad9>>;
    };
    Balances: {
        /**
         * See [`Pallet::transfer_allow_death`].
         */
        transfer_allow_death: TxDescriptor<Anonymize<I4ktuaksf5i1gk>>;
        /**
         * See [`Pallet::force_transfer`].
         */
        force_transfer: TxDescriptor<Anonymize<I9bqtpv2ii35mp>>;
        /**
         * See [`Pallet::transfer_keep_alive`].
         */
        transfer_keep_alive: TxDescriptor<Anonymize<I4ktuaksf5i1gk>>;
        /**
         * See [`Pallet::transfer_all`].
         */
        transfer_all: TxDescriptor<Anonymize<I9j7pagd6d4bda>>;
        /**
         * See [`Pallet::force_unreserve`].
         */
        force_unreserve: TxDescriptor<Anonymize<I2h9pmio37r7fb>>;
        /**
         * See [`Pallet::upgrade_accounts`].
         */
        upgrade_accounts: TxDescriptor<Anonymize<Ibmr18suc9ikh9>>;
        /**
         * See [`Pallet::force_set_balance`].
         */
        force_set_balance: TxDescriptor<Anonymize<I9iq22t0burs89>>;
    };
    CollatorSelection: {
        /**
         * See [`Pallet::set_invulnerables`].
         */
        set_invulnerables: TxDescriptor<Anonymize<Ifccifqltb5obi>>;
        /**
         * See [`Pallet::set_desired_candidates`].
         */
        set_desired_candidates: TxDescriptor<Anonymize<Iadtsfv699cq8b>>;
        /**
         * See [`Pallet::set_candidacy_bond`].
         */
        set_candidacy_bond: TxDescriptor<Anonymize<Ialpmgmhr3gk5r>>;
        /**
         * See [`Pallet::register_as_candidate`].
         */
        register_as_candidate: TxDescriptor<undefined>;
        /**
         * See [`Pallet::leave_intent`].
         */
        leave_intent: TxDescriptor<undefined>;
        /**
         * See [`Pallet::add_invulnerable`].
         */
        add_invulnerable: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         * See [`Pallet::remove_invulnerable`].
         */
        remove_invulnerable: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
    };
    Session: {
        /**
         * See [`Pallet::set_keys`].
         */
        set_keys: TxDescriptor<Anonymize<I81vt5eq60l4b6>>;
        /**
         * See [`Pallet::purge_keys`].
         */
        purge_keys: TxDescriptor<undefined>;
    };
    XcmpQueue: {
        /**
         * See [`Pallet::service_overweight`].
         */
        service_overweight: TxDescriptor<Anonymize<Iab1retd4gg4q1>>;
        /**
         * See [`Pallet::suspend_xcm_execution`].
         */
        suspend_xcm_execution: TxDescriptor<undefined>;
        /**
         * See [`Pallet::resume_xcm_execution`].
         */
        resume_xcm_execution: TxDescriptor<undefined>;
        /**
         * See [`Pallet::update_suspend_threshold`].
         */
        update_suspend_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
        /**
         * See [`Pallet::update_drop_threshold`].
         */
        update_drop_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
        /**
         * See [`Pallet::update_resume_threshold`].
         */
        update_resume_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
        /**
         * See [`Pallet::update_threshold_weight`].
         */
        update_threshold_weight: TxDescriptor<Anonymize<I2tni7rrb2buqm>>;
        /**
         * See [`Pallet::update_weight_restrict_decay`].
         */
        update_weight_restrict_decay: TxDescriptor<Anonymize<I2tni7rrb2buqm>>;
        /**
         * See [`Pallet::update_xcmp_max_individual_weight`].
         */
        update_xcmp_max_individual_weight: TxDescriptor<Anonymize<I2tni7rrb2buqm>>;
    };
    PolkadotXcm: {
        /**
         * See [`Pallet::send`].
         */
        send: TxDescriptor<Anonymize<I177omkp0t3av4>>;
        /**
         * See [`Pallet::teleport_assets`].
         */
        teleport_assets: TxDescriptor<Anonymize<I561t4i7oneora>>;
        /**
         * See [`Pallet::reserve_transfer_assets`].
         */
        reserve_transfer_assets: TxDescriptor<Anonymize<I561t4i7oneora>>;
        /**
         * See [`Pallet::execute`].
         */
        execute: TxDescriptor<Anonymize<Ia8um7upnt2t99>>;
        /**
         * See [`Pallet::force_xcm_version`].
         */
        force_xcm_version: TxDescriptor<Anonymize<I44pbivm2pe7qc>>;
        /**
         * See [`Pallet::force_default_xcm_version`].
         */
        force_default_xcm_version: TxDescriptor<Anonymize<Ic76kfh5ebqkpl>>;
        /**
         * See [`Pallet::force_subscribe_version_notify`].
         */
        force_subscribe_version_notify: TxDescriptor<Anonymize<I8nm9vc7o6er85>>;
        /**
         * See [`Pallet::force_unsubscribe_version_notify`].
         */
        force_unsubscribe_version_notify: TxDescriptor<Anonymize<I8nm9vc7o6er85>>;
        /**
         * See [`Pallet::limited_reserve_transfer_assets`].
         */
        limited_reserve_transfer_assets: TxDescriptor<Anonymize<I5up1l6nq7b3hn>>;
        /**
         * See [`Pallet::limited_teleport_assets`].
         */
        limited_teleport_assets: TxDescriptor<Anonymize<I5up1l6nq7b3hn>>;
        /**
         * See [`Pallet::force_suspension`].
         */
        force_suspension: TxDescriptor<Anonymize<Ibgm4rnf22lal1>>;
    };
    DmpQueue: {
        /**
         * See [`Pallet::service_overweight`].
         */
        service_overweight: TxDescriptor<Anonymize<Iab1retd4gg4q1>>;
    };
    Utility: {
        /**
         * See [`Pallet::batch`].
         */
        batch: TxDescriptor<Anonymize<Idui8q47jf1fh0>>;
        /**
         * See [`Pallet::as_derivative`].
         */
        as_derivative: TxDescriptor<Anonymize<I2tmmvssg2vf28>>;
        /**
         * See [`Pallet::batch_all`].
         */
        batch_all: TxDescriptor<Anonymize<Idui8q47jf1fh0>>;
        /**
         * See [`Pallet::dispatch_as`].
         */
        dispatch_as: TxDescriptor<Anonymize<Icboh8usno3nth>>;
        /**
         * See [`Pallet::force_batch`].
         */
        force_batch: TxDescriptor<Anonymize<Idui8q47jf1fh0>>;
        /**
         * See [`Pallet::with_weight`].
         */
        with_weight: TxDescriptor<Anonymize<Ic5jsm6t6f5d2b>>;
    };
    Multisig: {
        /**
         * See [`Pallet::as_multi_threshold_1`].
         */
        as_multi_threshold_1: TxDescriptor<Anonymize<I8qbpoatnebb1p>>;
        /**
         * See [`Pallet::as_multi`].
         */
        as_multi: TxDescriptor<Anonymize<Ic7cq8vbb84auq>>;
        /**
         * See [`Pallet::approve_as_multi`].
         */
        approve_as_multi: TxDescriptor<Anonymize<Ideaemvoneh309>>;
        /**
         * See [`Pallet::cancel_as_multi`].
         */
        cancel_as_multi: TxDescriptor<Anonymize<I3d9o9d7epp66v>>;
    };
    Proxy: {
        /**
         * See [`Pallet::proxy`].
         */
        proxy: TxDescriptor<Anonymize<Ibd8tfruce82ld>>;
        /**
         * See [`Pallet::add_proxy`].
         */
        add_proxy: TxDescriptor<Anonymize<Iovrcu9bfelfq>>;
        /**
         * See [`Pallet::remove_proxy`].
         */
        remove_proxy: TxDescriptor<Anonymize<Iovrcu9bfelfq>>;
        /**
         * See [`Pallet::remove_proxies`].
         */
        remove_proxies: TxDescriptor<undefined>;
        /**
         * See [`Pallet::create_pure`].
         */
        create_pure: TxDescriptor<Anonymize<Iefr8jgtgfk8um>>;
        /**
         * See [`Pallet::kill_pure`].
         */
        kill_pure: TxDescriptor<Anonymize<I3j05hul54uj7q>>;
        /**
         * See [`Pallet::announce`].
         */
        announce: TxDescriptor<Anonymize<I2eb501t8s6hsq>>;
        /**
         * See [`Pallet::remove_announcement`].
         */
        remove_announcement: TxDescriptor<Anonymize<I2eb501t8s6hsq>>;
        /**
         * See [`Pallet::reject_announcement`].
         */
        reject_announcement: TxDescriptor<Anonymize<Ianmuoljk2sk1u>>;
        /**
         * See [`Pallet::proxy_announced`].
         */
        proxy_announced: TxDescriptor<Anonymize<I2ptedi00tj9mc>>;
    };
    Assets: {
        /**
         * See [`Pallet::create`].
         */
        create: TxDescriptor<Anonymize<Ic357tcepuvo5c>>;
        /**
         * See [`Pallet::force_create`].
         */
        force_create: TxDescriptor<Anonymize<I2rnoam876ruhj>>;
        /**
         * See [`Pallet::start_destroy`].
         */
        start_destroy: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         * See [`Pallet::destroy_accounts`].
         */
        destroy_accounts: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         * See [`Pallet::destroy_approvals`].
         */
        destroy_approvals: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         * See [`Pallet::finish_destroy`].
         */
        finish_destroy: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         * See [`Pallet::mint`].
         */
        mint: TxDescriptor<Anonymize<Ib3qnc19gu633c>>;
        /**
         * See [`Pallet::burn`].
         */
        burn: TxDescriptor<Anonymize<Ifira6u9hi7cu1>>;
        /**
         * See [`Pallet::transfer`].
         */
        transfer: TxDescriptor<Anonymize<I72tqocvdoqfff>>;
        /**
         * See [`Pallet::transfer_keep_alive`].
         */
        transfer_keep_alive: TxDescriptor<Anonymize<I72tqocvdoqfff>>;
        /**
         * See [`Pallet::force_transfer`].
         */
        force_transfer: TxDescriptor<Anonymize<I2i27f3sfmvc05>>;
        /**
         * See [`Pallet::freeze`].
         */
        freeze: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         * See [`Pallet::thaw`].
         */
        thaw: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         * See [`Pallet::freeze_asset`].
         */
        freeze_asset: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         * See [`Pallet::thaw_asset`].
         */
        thaw_asset: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         * See [`Pallet::transfer_ownership`].
         */
        transfer_ownership: TxDescriptor<Anonymize<I3abtumcmempjs>>;
        /**
         * See [`Pallet::set_team`].
         */
        set_team: TxDescriptor<Anonymize<Id81m8flopt8ha>>;
        /**
         * See [`Pallet::set_metadata`].
         */
        set_metadata: TxDescriptor<Anonymize<I8hff7chabggkd>>;
        /**
         * See [`Pallet::clear_metadata`].
         */
        clear_metadata: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         * See [`Pallet::force_set_metadata`].
         */
        force_set_metadata: TxDescriptor<Anonymize<I49i39mtj1ivbs>>;
        /**
         * See [`Pallet::force_clear_metadata`].
         */
        force_clear_metadata: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         * See [`Pallet::force_asset_status`].
         */
        force_asset_status: TxDescriptor<Anonymize<Ifkr2kcak2vto1>>;
        /**
         * See [`Pallet::approve_transfer`].
         */
        approve_transfer: TxDescriptor<Anonymize<I1ju6r8q0cs9jt>>;
        /**
         * See [`Pallet::cancel_approval`].
         */
        cancel_approval: TxDescriptor<Anonymize<I4kpeq6j7cd5bu>>;
        /**
         * See [`Pallet::force_cancel_approval`].
         */
        force_cancel_approval: TxDescriptor<Anonymize<I5na1ka76k6811>>;
        /**
         * See [`Pallet::transfer_approved`].
         */
        transfer_approved: TxDescriptor<Anonymize<I59mhdb9omdqfa>>;
        /**
         * See [`Pallet::touch`].
         */
        touch: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         * See [`Pallet::refund`].
         */
        refund: TxDescriptor<Anonymize<I9vl5kpk0fpakt>>;
        /**
         * See [`Pallet::set_min_balance`].
         */
        set_min_balance: TxDescriptor<Anonymize<I717jt61hu19b4>>;
        /**
         * See [`Pallet::touch_other`].
         */
        touch_other: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         * See [`Pallet::refund_other`].
         */
        refund_other: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         * See [`Pallet::block`].
         */
        block: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
    };
    Uniques: {
        /**
         * See [`Pallet::create`].
         */
        create: TxDescriptor<Anonymize<If66ivi02f7256>>;
        /**
         * See [`Pallet::force_create`].
         */
        force_create: TxDescriptor<Anonymize<I223jtcatlfkrc>>;
        /**
         * See [`Pallet::destroy`].
         */
        destroy: TxDescriptor<Anonymize<I223jg78mng8hq>>;
        /**
         * See [`Pallet::mint`].
         */
        mint: TxDescriptor<Anonymize<I4iiuiftkpq3fd>>;
        /**
         * See [`Pallet::burn`].
         */
        burn: TxDescriptor<Anonymize<Ibra6533h92c0a>>;
        /**
         * See [`Pallet::transfer`].
         */
        transfer: TxDescriptor<Anonymize<Ibgvkh96s68a66>>;
        /**
         * See [`Pallet::redeposit`].
         */
        redeposit: TxDescriptor<Anonymize<If9vko7pv0231m>>;
        /**
         * See [`Pallet::freeze`].
         */
        freeze: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         * See [`Pallet::thaw`].
         */
        thaw: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         * See [`Pallet::freeze_collection`].
         */
        freeze_collection: TxDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         * See [`Pallet::thaw_collection`].
         */
        thaw_collection: TxDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         * See [`Pallet::transfer_ownership`].
         */
        transfer_ownership: TxDescriptor<Anonymize<Ie5i0q2glmr0md>>;
        /**
         * See [`Pallet::set_team`].
         */
        set_team: TxDescriptor<Anonymize<I1ap9tlenhr44l>>;
        /**
         * See [`Pallet::approve_transfer`].
         */
        approve_transfer: TxDescriptor<Anonymize<Ib92t90p616grb>>;
        /**
         * See [`Pallet::cancel_approval`].
         */
        cancel_approval: TxDescriptor<Anonymize<Ieipuujd6879do>>;
        /**
         * See [`Pallet::force_item_status`].
         */
        force_item_status: TxDescriptor<Anonymize<Ie56eq9sg1rsoc>>;
        /**
         * See [`Pallet::set_attribute`].
         */
        set_attribute: TxDescriptor<Anonymize<I5tvvgui05tn6e>>;
        /**
         * See [`Pallet::clear_attribute`].
         */
        clear_attribute: TxDescriptor<Anonymize<Ibal0joadvdc2h>>;
        /**
         * See [`Pallet::set_metadata`].
         */
        set_metadata: TxDescriptor<Anonymize<Iceq9fmmp9aeqv>>;
        /**
         * See [`Pallet::clear_metadata`].
         */
        clear_metadata: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         * See [`Pallet::set_collection_metadata`].
         */
        set_collection_metadata: TxDescriptor<Anonymize<I9viqhmdtuof5e>>;
        /**
         * See [`Pallet::clear_collection_metadata`].
         */
        clear_collection_metadata: TxDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         * See [`Pallet::set_accept_ownership`].
         */
        set_accept_ownership: TxDescriptor<Anonymize<Ibqooroq6rr5kr>>;
        /**
         * See [`Pallet::set_collection_max_supply`].
         */
        set_collection_max_supply: TxDescriptor<Anonymize<I6h88h8vba22v8>>;
        /**
         * See [`Pallet::set_price`].
         */
        set_price: TxDescriptor<Anonymize<Ia9cd4jqb5eecb>>;
        /**
         * See [`Pallet::buy_item`].
         */
        buy_item: TxDescriptor<Anonymize<I19jiel1ftbcce>>;
    };
    Nfts: {
        /**
         * See [`Pallet::create`].
         */
        create: TxDescriptor<Anonymize<I43aobns89nbkh>>;
        /**
         * See [`Pallet::force_create`].
         */
        force_create: TxDescriptor<Anonymize<Iamd7rovec1hfb>>;
        /**
         * See [`Pallet::destroy`].
         */
        destroy: TxDescriptor<Anonymize<I77ie723ncd4co>>;
        /**
         * See [`Pallet::mint`].
         */
        mint: TxDescriptor<Anonymize<Ieebloeahma3ke>>;
        /**
         * See [`Pallet::force_mint`].
         */
        force_mint: TxDescriptor<Anonymize<I4mbtpf4pu3rec>>;
        /**
         * See [`Pallet::burn`].
         */
        burn: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         * See [`Pallet::transfer`].
         */
        transfer: TxDescriptor<Anonymize<Ibgvkh96s68a66>>;
        /**
         * See [`Pallet::redeposit`].
         */
        redeposit: TxDescriptor<Anonymize<If9vko7pv0231m>>;
        /**
         * See [`Pallet::lock_item_transfer`].
         */
        lock_item_transfer: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         * See [`Pallet::unlock_item_transfer`].
         */
        unlock_item_transfer: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         * See [`Pallet::lock_collection`].
         */
        lock_collection: TxDescriptor<Anonymize<I1ahf3pvgsgbu>>;
        /**
         * See [`Pallet::transfer_ownership`].
         */
        transfer_ownership: TxDescriptor<Anonymize<Ie5i0q2glmr0md>>;
        /**
         * See [`Pallet::set_team`].
         */
        set_team: TxDescriptor<Anonymize<I9uapdn16emsti>>;
        /**
         * See [`Pallet::force_collection_owner`].
         */
        force_collection_owner: TxDescriptor<Anonymize<Ie5i0q2glmr0md>>;
        /**
         * See [`Pallet::force_collection_config`].
         */
        force_collection_config: TxDescriptor<Anonymize<I97qcg6i3l8gee>>;
        /**
         * See [`Pallet::approve_transfer`].
         */
        approve_transfer: TxDescriptor<Anonymize<Ib5udrahak005b>>;
        /**
         * See [`Pallet::cancel_approval`].
         */
        cancel_approval: TxDescriptor<Anonymize<Ib92t90p616grb>>;
        /**
         * See [`Pallet::clear_all_transfer_approvals`].
         */
        clear_all_transfer_approvals: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         * See [`Pallet::lock_item_properties`].
         */
        lock_item_properties: TxDescriptor<Anonymize<I1jj31tn29ie3c>>;
        /**
         * See [`Pallet::set_attribute`].
         */
        set_attribute: TxDescriptor<Anonymize<I5llu6o6a0go5i>>;
        /**
         * See [`Pallet::force_set_attribute`].
         */
        force_set_attribute: TxDescriptor<Anonymize<Ic8b8561e6t9ie>>;
        /**
         * See [`Pallet::clear_attribute`].
         */
        clear_attribute: TxDescriptor<Anonymize<I93r2effh7od84>>;
        /**
         * See [`Pallet::approve_item_attributes`].
         */
        approve_item_attributes: TxDescriptor<Anonymize<Ib92t90p616grb>>;
        /**
         * See [`Pallet::cancel_item_attributes_approval`].
         */
        cancel_item_attributes_approval: TxDescriptor<Anonymize<I6afd7fllr8otc>>;
        /**
         * See [`Pallet::set_metadata`].
         */
        set_metadata: TxDescriptor<Anonymize<Icrkms46uh8tpb>>;
        /**
         * See [`Pallet::clear_metadata`].
         */
        clear_metadata: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         * See [`Pallet::set_collection_metadata`].
         */
        set_collection_metadata: TxDescriptor<Anonymize<I78u60nqh0etah>>;
        /**
         * See [`Pallet::clear_collection_metadata`].
         */
        clear_collection_metadata: TxDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         * See [`Pallet::set_accept_ownership`].
         */
        set_accept_ownership: TxDescriptor<Anonymize<Ibqooroq6rr5kr>>;
        /**
         * See [`Pallet::set_collection_max_supply`].
         */
        set_collection_max_supply: TxDescriptor<Anonymize<I6h88h8vba22v8>>;
        /**
         * See [`Pallet::update_mint_settings`].
         */
        update_mint_settings: TxDescriptor<Anonymize<I1lso3vlgherue>>;
        /**
         * See [`Pallet::set_price`].
         */
        set_price: TxDescriptor<Anonymize<Ia9cd4jqb5eecb>>;
        /**
         * See [`Pallet::buy_item`].
         */
        buy_item: TxDescriptor<Anonymize<I19jiel1ftbcce>>;
        /**
         * See [`Pallet::pay_tips`].
         */
        pay_tips: TxDescriptor<Anonymize<I26c8p47106toa>>;
        /**
         * See [`Pallet::create_swap`].
         */
        create_swap: TxDescriptor<Anonymize<Iq82b3qvf20ne>>;
        /**
         * See [`Pallet::cancel_swap`].
         */
        cancel_swap: TxDescriptor<Anonymize<Ic3j8ku6mbsms4>>;
        /**
         * See [`Pallet::claim_swap`].
         */
        claim_swap: TxDescriptor<Anonymize<I3nvoqsi8f05ph>>;
        /**
         * See [`Pallet::mint_pre_signed`].
         */
        mint_pre_signed: TxDescriptor<Anonymize<I3eoft5md071do>>;
        /**
         * See [`Pallet::set_attributes_pre_signed`].
         */
        set_attributes_pre_signed: TxDescriptor<Anonymize<I923eug653ra0o>>;
    };
    ForeignAssets: {
        /**
         * See [`Pallet::create`].
         */
        create: TxDescriptor<Anonymize<Ifj5cqlfpn597s>>;
        /**
         * See [`Pallet::force_create`].
         */
        force_create: TxDescriptor<Anonymize<I66k3d3punogpc>>;
        /**
         * See [`Pallet::start_destroy`].
         */
        start_destroy: TxDescriptor<Anonymize<Idchecnpr8vnel>>;
        /**
         * See [`Pallet::destroy_accounts`].
         */
        destroy_accounts: TxDescriptor<Anonymize<Idchecnpr8vnel>>;
        /**
         * See [`Pallet::destroy_approvals`].
         */
        destroy_approvals: TxDescriptor<Anonymize<Idchecnpr8vnel>>;
        /**
         * See [`Pallet::finish_destroy`].
         */
        finish_destroy: TxDescriptor<Anonymize<Idchecnpr8vnel>>;
        /**
         * See [`Pallet::mint`].
         */
        mint: TxDescriptor<Anonymize<Ibornr0s1glri>>;
        /**
         * See [`Pallet::burn`].
         */
        burn: TxDescriptor<Anonymize<I92nkla4njakpv>>;
        /**
         * See [`Pallet::transfer`].
         */
        transfer: TxDescriptor<Anonymize<I1gcdprj14fsda>>;
        /**
         * See [`Pallet::transfer_keep_alive`].
         */
        transfer_keep_alive: TxDescriptor<Anonymize<I1gcdprj14fsda>>;
        /**
         * See [`Pallet::force_transfer`].
         */
        force_transfer: TxDescriptor<Anonymize<Ibp1vdtkstbc3>>;
        /**
         * See [`Pallet::freeze`].
         */
        freeze: TxDescriptor<Anonymize<Ibg8u7uiu5rah0>>;
        /**
         * See [`Pallet::thaw`].
         */
        thaw: TxDescriptor<Anonymize<Ibg8u7uiu5rah0>>;
        /**
         * See [`Pallet::freeze_asset`].
         */
        freeze_asset: TxDescriptor<Anonymize<Idchecnpr8vnel>>;
        /**
         * See [`Pallet::thaw_asset`].
         */
        thaw_asset: TxDescriptor<Anonymize<Idchecnpr8vnel>>;
        /**
         * See [`Pallet::transfer_ownership`].
         */
        transfer_ownership: TxDescriptor<Anonymize<I2bp8p3dql3d1g>>;
        /**
         * See [`Pallet::set_team`].
         */
        set_team: TxDescriptor<Anonymize<I7j3g1si0o1jk>>;
        /**
         * See [`Pallet::set_metadata`].
         */
        set_metadata: TxDescriptor<Anonymize<I4ji9aripkmj83>>;
        /**
         * See [`Pallet::clear_metadata`].
         */
        clear_metadata: TxDescriptor<Anonymize<Idchecnpr8vnel>>;
        /**
         * See [`Pallet::force_set_metadata`].
         */
        force_set_metadata: TxDescriptor<Anonymize<Ib5t4pl4i1fci0>>;
        /**
         * See [`Pallet::force_clear_metadata`].
         */
        force_clear_metadata: TxDescriptor<Anonymize<Idchecnpr8vnel>>;
        /**
         * See [`Pallet::force_asset_status`].
         */
        force_asset_status: TxDescriptor<Anonymize<I9opijbaphgsa4>>;
        /**
         * See [`Pallet::approve_transfer`].
         */
        approve_transfer: TxDescriptor<Anonymize<I8dqplr44uumpe>>;
        /**
         * See [`Pallet::cancel_approval`].
         */
        cancel_approval: TxDescriptor<Anonymize<Ibbahpmfslhfd9>>;
        /**
         * See [`Pallet::force_cancel_approval`].
         */
        force_cancel_approval: TxDescriptor<Anonymize<I26avdtf769r3t>>;
        /**
         * See [`Pallet::transfer_approved`].
         */
        transfer_approved: TxDescriptor<Anonymize<Ia659v5gfhg1u4>>;
        /**
         * See [`Pallet::touch`].
         */
        touch: TxDescriptor<Anonymize<Idchecnpr8vnel>>;
        /**
         * See [`Pallet::refund`].
         */
        refund: TxDescriptor<Anonymize<I3pdlc3jlbrua>>;
        /**
         * See [`Pallet::set_min_balance`].
         */
        set_min_balance: TxDescriptor<Anonymize<Idames6kvepfl8>>;
        /**
         * See [`Pallet::touch_other`].
         */
        touch_other: TxDescriptor<Anonymize<Ibg8u7uiu5rah0>>;
        /**
         * See [`Pallet::refund_other`].
         */
        refund_other: TxDescriptor<Anonymize<Ibg8u7uiu5rah0>>;
        /**
         * See [`Pallet::block`].
         */
        block: TxDescriptor<Anonymize<Ibg8u7uiu5rah0>>;
    };
};
type IEvent = {
    System: {
        /**
         * An extrinsic completed successfully.
         */
        ExtrinsicSuccess: PlainDescriptor<Anonymize<Ia82mnkmeo2rhc>>;
        /**
         * An extrinsic failed.
         */
        ExtrinsicFailed: PlainDescriptor<Anonymize<I3ehp1l633mpva>>;
        /**
         * `:code` was updated.
         */
        CodeUpdated: PlainDescriptor<undefined>;
        /**
         * A new account was created.
         */
        NewAccount: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
         * An account was reaped.
         */
        KilledAccount: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
         * On on-chain remark happened.
         */
        Remarked: PlainDescriptor<Anonymize<I855j4i3kr8ko1>>;
    };
    ParachainSystem: {
        /**
         * The validation function has been scheduled to apply.
         */
        ValidationFunctionStored: PlainDescriptor<undefined>;
        /**
         * The validation function was applied as of the contained relay chain block number.
         */
        ValidationFunctionApplied: PlainDescriptor<Anonymize<Idd7hd99u0ho0n>>;
        /**
         * The relay-chain aborted the upgrade process.
         */
        ValidationFunctionDiscarded: PlainDescriptor<undefined>;
        /**
         * An upgrade has been authorized.
         */
        UpgradeAuthorized: PlainDescriptor<Anonymize<Ib51vk42m1po4n>>;
        /**
         * Some downward messages have been received and will be processed.
         */
        DownwardMessagesReceived: PlainDescriptor<Anonymize<Iafscmv8tjf0ou>>;
        /**
         * Downward messages were processed using the given weight.
         */
        DownwardMessagesProcessed: PlainDescriptor<Anonymize<I100l07kaehdlp>>;
        /**
         * An upward message was sent to the relay chain.
         */
        UpwardMessageSent: PlainDescriptor<Anonymize<I6gnbnvip5vvdi>>;
    };
    Balances: {
        /**
         * An account was created with some free balance.
         */
        Endowed: PlainDescriptor<Anonymize<Icv68aq8841478>>;
        /**
         * An account was removed whose balance was non-zero but below ExistentialDeposit,
         * resulting in an outright loss.
         */
        DustLost: PlainDescriptor<Anonymize<Ic262ibdoec56a>>;
        /**
         * Transfer succeeded.
         */
        Transfer: PlainDescriptor<Anonymize<Iflcfm9b6nlmdd>>;
        /**
         * A balance was set by root.
         */
        BalanceSet: PlainDescriptor<Anonymize<Ijrsf4mnp3eka>>;
        /**
         * Some balance was reserved (moved from free to reserved).
         */
        Reserved: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         * Some balance was unreserved (moved from reserved to free).
         */
        Unreserved: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         * Some balance was moved from the reserve of the first account to the second account.
         * Final argument indicates the destination balance type.
         */
        ReserveRepatriated: PlainDescriptor<Anonymize<I8tjvj9uq4b7hi>>;
        /**
         * Some amount was deposited (e.g. for transaction fees).
         */
        Deposit: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         * Some amount was withdrawn from the account (e.g. for transaction fees).
         */
        Withdraw: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         * Some amount was removed from the account (e.g. for misbehavior).
         */
        Slashed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         * Some amount was minted into an account.
         */
        Minted: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         * Some amount was burned from an account.
         */
        Burned: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         * Some amount was suspended from an account (it can be restored later).
         */
        Suspended: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         * Some amount was restored into an account.
         */
        Restored: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         * An account was upgraded.
         */
        Upgraded: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         * Total issuance was increased by `amount`, creating a credit to be balanced.
         */
        Issued: PlainDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
         * Total issuance was decreased by `amount`, creating a debt to be balanced.
         */
        Rescinded: PlainDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
         * Some balance was locked.
         */
        Locked: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         * Some balance was unlocked.
         */
        Unlocked: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         * Some balance was frozen.
         */
        Frozen: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         * Some balance was thawed.
         */
        Thawed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
    };
    TransactionPayment: {
        /**
         * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
         * has been paid by `who`.
         */
        TransactionFeePaid: PlainDescriptor<Anonymize<Ier2cke86dqbr2>>;
    };
    AssetTxPayment: {
        /**
         * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
         * has been paid by `who` in an asset `asset_id`.
         */
        AssetTxFeePaid: PlainDescriptor<Anonymize<I94ss5ias99t8d>>;
    };
    CollatorSelection: {
        /**
         * New Invulnerables were set.
         */
        NewInvulnerables: PlainDescriptor<Anonymize<I39t01nnod9109>>;
        /**
         * A new Invulnerable was added.
         */
        InvulnerableAdded: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
        /**
         * An Invulnerable was removed.
         */
        InvulnerableRemoved: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
        /**
         * The number of desired candidates was set.
         */
        NewDesiredCandidates: PlainDescriptor<Anonymize<I1qmtmbe5so8r3>>;
        /**
         * The candidacy bond was set.
         */
        NewCandidacyBond: PlainDescriptor<Anonymize<Ih99m6ehpcar7>>;
        /**
         * A new candidate joined.
         */
        CandidateAdded: PlainDescriptor<Anonymize<Idgorhsbgdq2ap>>;
        /**
         * A candidate was removed.
         */
        CandidateRemoved: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
        /**
         * An account was unable to be added to the Invulnerables because they did not have keys
         * registered. Other Invulnerables may have been set.
         */
        InvalidInvulnerableSkipped: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
    };
    Session: {
        /**
         * New session has happened. Note that the argument is the session index, not the
         * block number as the type might suggest.
         */
        NewSession: PlainDescriptor<Anonymize<I2hq50pu2kdjpo>>;
    };
    XcmpQueue: {
        /**
         * Some XCM was executed ok.
         */
        Success: PlainDescriptor<Anonymize<I2650grdiibijj>>;
        /**
         * Some XCM failed.
         */
        Fail: PlainDescriptor<Anonymize<I5q96bb8stug61>>;
        /**
         * Bad XCM version used.
         */
        BadVersion: PlainDescriptor<Anonymize<I137t1cld92pod>>;
        /**
         * Bad XCM format used.
         */
        BadFormat: PlainDescriptor<Anonymize<I137t1cld92pod>>;
        /**
         * An HRMP message was sent to a sibling parachain.
         */
        XcmpMessageSent: PlainDescriptor<Anonymize<I137t1cld92pod>>;
        /**
         * An XCM exceeded the individual message weight budget.
         */
        OverweightEnqueued: PlainDescriptor<Anonymize<If8b64mo2bodj0>>;
        /**
         * An XCM from the overweight queue was executed with the given actual weight used.
         */
        OverweightServiced: PlainDescriptor<Anonymize<Icu5p58ltu1veo>>;
    };
    PolkadotXcm: {
        /**
         * Execution of an XCM message was attempted.
         */
        Attempted: PlainDescriptor<Anonymize<Ifmqhv1oc3rh3>>;
        /**
         * A XCM message was sent.
         */
        Sent: PlainDescriptor<Anonymize<Ia37keupp0t7n6>>;
        /**
         * Query response received which does not match a registered query. This may be because a
         * matching query was never registered, it may be because it is a duplicate response, or
         * because the query timed out.
         */
        UnexpectedResponse: PlainDescriptor<Anonymize<Iel50id65eke1v>>;
        /**
         * Query response has been received and is ready for taking with `take_response`. There is
         * no registered notification call.
         */
        ResponseReady: PlainDescriptor<Anonymize<I9s1ksje8tscgp>>;
        /**
         * Query response has been received and query is removed. The registered notification has
         * been dispatched and executed successfully.
         */
        Notified: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
        /**
         * Query response has been received and query is removed. The registered notification
         * could not be dispatched because the dispatch weight is greater than the maximum weight
         * originally budgeted by this runtime for the query result.
         */
        NotifyOverweight: PlainDescriptor<Anonymize<Idg69klialbkb8>>;
        /**
         * Query response has been received and query is removed. There was a general error with
         * dispatching the notification call.
         */
        NotifyDispatchError: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
        /**
         * Query response has been received and query is removed. The dispatch was unable to be
         * decoded into a `Call`; this might be due to dispatch function having a signature which
         * is not `(origin, QueryId, Response)`.
         */
        NotifyDecodeFailed: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
        /**
         * Expected query response has been received but the origin location of the response does
         * not match that expected. The query remains registered for a later, valid, response to
         * be received and acted upon.
         */
        InvalidResponder: PlainDescriptor<Anonymize<I6ama1doqn7ush>>;
        /**
         * Expected query response has been received but the expected origin location placed in
         * storage by this runtime previously cannot be decoded. The query remains registered.
         *
         * This is unexpected (since a location placed in storage in a previously executing
         * runtime should be readable prior to query timeout) and dangerous since the possibly
         * valid response will be dropped. Manual governance intervention is probably going to be
         * needed.
         */
        InvalidResponderVersion: PlainDescriptor<Anonymize<Iel50id65eke1v>>;
        /**
         * Received query response has been read and removed.
         */
        ResponseTaken: PlainDescriptor<Anonymize<I30pg328m00nr3>>;
        /**
         * Some assets have been placed in an asset trap.
         */
        AssetsTrapped: PlainDescriptor<Anonymize<I2on6pi7n0k0ik>>;
        /**
         * An XCM version change notification message has been attempted to be sent.
         *
         * The cost of sending it (borne by the chain) is included.
         */
        VersionChangeNotified: PlainDescriptor<Anonymize<Iduq5i0c15rc0o>>;
        /**
         * The supported version of a location has been changed. This might be through an
         * automatic notification or a manual intervention.
         */
        SupportedVersionChanged: PlainDescriptor<Anonymize<I44pbivm2pe7qc>>;
        /**
         * A given location which had a version change subscription was dropped owing to an error
         * sending the notification to it.
         */
        NotifyTargetSendFail: PlainDescriptor<Anonymize<I75o78kjj6nl2u>>;
        /**
         * A given location which had a version change subscription was dropped owing to an error
         * migrating the location to our new XCM format.
         */
        NotifyTargetMigrationFail: PlainDescriptor<Anonymize<Ien06stpa519em>>;
        /**
         * Expected query response has been received but the expected querier location placed in
         * storage by this runtime previously cannot be decoded. The query remains registered.
         *
         * This is unexpected (since a location placed in storage in a previously executing
         * runtime should be readable prior to query timeout) and dangerous since the possibly
         * valid response will be dropped. Manual governance intervention is probably going to be
         * needed.
         */
        InvalidQuerierVersion: PlainDescriptor<Anonymize<Iel50id65eke1v>>;
        /**
         * Expected query response has been received but the querier location of the response does
         * not match the expected. The query remains registered for a later, valid, response to
         * be received and acted upon.
         */
        InvalidQuerier: PlainDescriptor<Anonymize<I13106a549td2f>>;
        /**
         * A remote has requested XCM version change notification from us and we have honored it.
         * A version information message is sent to them and its cost is included.
         */
        VersionNotifyStarted: PlainDescriptor<Anonymize<Icti9s23lkm0qj>>;
        /**
         * We have requested that a remote chain send us XCM version change notifications.
         */
        VersionNotifyRequested: PlainDescriptor<Anonymize<Icti9s23lkm0qj>>;
        /**
         * We have requested that a remote chain stops sending us XCM version change
         * notifications.
         */
        VersionNotifyUnrequested: PlainDescriptor<Anonymize<Icti9s23lkm0qj>>;
        /**
         * Fees were paid from a location for an operation (often for using `SendXcm`).
         */
        FeesPaid: PlainDescriptor<Anonymize<Iemrprej97cn2e>>;
        /**
         * Some assets have been claimed from an asset trap
         */
        AssetsClaimed: PlainDescriptor<Anonymize<I2on6pi7n0k0ik>>;
    };
    CumulusXcm: {
        /**
         * Downward message is invalid XCM.
         * \[ id \]
         */
        InvalidFormat: PlainDescriptor<FixedSizeBinary<32>>;
        /**
         * Downward message is unsupported version of XCM.
         * \[ id \]
         */
        UnsupportedVersion: PlainDescriptor<FixedSizeBinary<32>>;
        /**
         * Downward message executed with the given outcome.
         * \[ id, outcome \]
         */
        ExecutedDownward: PlainDescriptor<Anonymize<I2c8bkmorso999>>;
    };
    DmpQueue: {
        /**
         * Downward message is invalid XCM.
         */
        InvalidFormat: PlainDescriptor<Anonymize<I137t1cld92pod>>;
        /**
         * Downward message is unsupported version of XCM.
         */
        UnsupportedVersion: PlainDescriptor<Anonymize<I137t1cld92pod>>;
        /**
         * Downward message executed with the given outcome.
         */
        ExecutedDownward: PlainDescriptor<Anonymize<I2gfpd8ikmku31>>;
        /**
         * The weight limit for handling downward messages was reached.
         */
        WeightExhausted: PlainDescriptor<Anonymize<Iadf1uv6agh6rp>>;
        /**
         * Downward message is overweight and was placed in the overweight queue.
         */
        OverweightEnqueued: PlainDescriptor<Anonymize<If4e6jvgfn13rl>>;
        /**
         * Downward message from the overweight queue was executed.
         */
        OverweightServiced: PlainDescriptor<Anonymize<Ise9gq7rqlnvm>>;
        /**
         * The maximum number of downward messages was reached.
         */
        MaxMessagesExhausted: PlainDescriptor<Anonymize<I137t1cld92pod>>;
    };
    Utility: {
        /**
         * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
         * well as the error.
         */
        BatchInterrupted: PlainDescriptor<Anonymize<I36a1f0tvpm2vl>>;
        /**
         * Batch of dispatches completed fully with no error.
         */
        BatchCompleted: PlainDescriptor<undefined>;
        /**
         * Batch of dispatches completed but has errors.
         */
        BatchCompletedWithErrors: PlainDescriptor<undefined>;
        /**
         * A single item within a Batch of dispatches has completed with no error.
         */
        ItemCompleted: PlainDescriptor<undefined>;
        /**
         * A single item within a Batch of dispatches has completed with error.
         */
        ItemFailed: PlainDescriptor<Anonymize<I4u5n3f2atceoo>>;
        /**
         * A call was dispatched.
         */
        DispatchedAs: PlainDescriptor<Anonymize<Ib9umvo53pgk1d>>;
    };
    Multisig: {
        /**
         * A new multisig operation has begun.
         */
        NewMultisig: PlainDescriptor<Anonymize<Iep27ialq4a7o7>>;
        /**
         * A multisig operation has been approved by someone.
         */
        MultisigApproval: PlainDescriptor<Anonymize<Iasu5jvoqr43mv>>;
        /**
         * A multisig operation has been executed.
         */
        MultisigExecuted: PlainDescriptor<Anonymize<Ib1v1gumfn2q1t>>;
        /**
         * A multisig operation has been cancelled.
         */
        MultisigCancelled: PlainDescriptor<Anonymize<I5qolde99acmd1>>;
    };
    Proxy: {
        /**
         * A proxy was executed correctly, with the given.
         */
        ProxyExecuted: PlainDescriptor<Anonymize<Ib9umvo53pgk1d>>;
        /**
         * A pure account has been created by new proxy with given
         * disambiguation index and proxy type.
         */
        PureCreated: PlainDescriptor<Anonymize<Ie7cuj84ohvg56>>;
        /**
         * An announcement was placed to make a call in the future.
         */
        Announced: PlainDescriptor<Anonymize<I2ur0oeqg495j8>>;
        /**
         * A proxy was added.
         */
        ProxyAdded: PlainDescriptor<Anonymize<I8ioopvokvl3ud>>;
        /**
         * A proxy was removed.
         */
        ProxyRemoved: PlainDescriptor<Anonymize<I8ioopvokvl3ud>>;
    };
    Assets: {
        /**
         * Some asset class was created.
         */
        Created: PlainDescriptor<Anonymize<I88ff3u4dpivk>>;
        /**
         * Some assets were issued.
         */
        Issued: PlainDescriptor<Anonymize<I33cp947glv1ks>>;
        /**
         * Some assets were transferred.
         */
        Transferred: PlainDescriptor<Anonymize<Ic9om1gmmqu7rq>>;
        /**
         * Some assets were destroyed.
         */
        Burned: PlainDescriptor<Anonymize<I5hfov2b68ppb6>>;
        /**
         * The management team changed.
         */
        TeamChanged: PlainDescriptor<Anonymize<Ibthhb2m9vneds>>;
        /**
         * The owner changed.
         */
        OwnerChanged: PlainDescriptor<Anonymize<Iaitn5bqfacj7k>>;
        /**
         * Some account `who` was frozen.
         */
        Frozen: PlainDescriptor<Anonymize<If4ebvclj2ugvi>>;
        /**
         * Some account `who` was thawed.
         */
        Thawed: PlainDescriptor<Anonymize<If4ebvclj2ugvi>>;
        /**
         * Some asset `asset_id` was frozen.
         */
        AssetFrozen: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         * Some asset `asset_id` was thawed.
         */
        AssetThawed: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         * Accounts were destroyed for given asset.
         */
        AccountsDestroyed: PlainDescriptor<Anonymize<Ieduc1e6frq8rb>>;
        /**
         * Approvals were destroyed for given asset.
         */
        ApprovalsDestroyed: PlainDescriptor<Anonymize<I9h6gbtabovtm4>>;
        /**
         * An asset class is in the process of being destroyed.
         */
        DestructionStarted: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         * An asset class was destroyed.
         */
        Destroyed: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         * Some asset class was force-created.
         */
        ForceCreated: PlainDescriptor<Anonymize<Iaitn5bqfacj7k>>;
        /**
         * New metadata has been set for an asset.
         */
        MetadataSet: PlainDescriptor<Anonymize<Ifnsa0dkkpf465>>;
        /**
         * Metadata has been cleared for an asset.
         */
        MetadataCleared: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         * (Additional) funds have been approved for transfer to a destination account.
         */
        ApprovedTransfer: PlainDescriptor<Anonymize<I65dtqr2egjbc3>>;
        /**
         * An approval for account `delegate` was cancelled by `owner`.
         */
        ApprovalCancelled: PlainDescriptor<Anonymize<Ibqj3vg5s5lk0c>>;
        /**
         * An `amount` was transferred in its entirety from `owner` to `destination` by
         * the approved `delegate`.
         */
        TransferredApproved: PlainDescriptor<Anonymize<I6l73u513p8rna>>;
        /**
         * An asset has had its attributes changed by the `Force` origin.
         */
        AssetStatusChanged: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         * The min_balance of an asset has been updated by the asset owner.
         */
        AssetMinBalanceChanged: PlainDescriptor<Anonymize<Iefqmt2htu1dlu>>;
        /**
         * Some account `who` was created with a deposit from `depositor`.
         */
        Touched: PlainDescriptor<Anonymize<If8bgtgqrchjtu>>;
        /**
         * Some account `who` was blocked.
         */
        Blocked: PlainDescriptor<Anonymize<If4ebvclj2ugvi>>;
    };
    Uniques: {
        /**
         * A `collection` was created.
         */
        Created: PlainDescriptor<Anonymize<I9gqanbbbe917p>>;
        /**
         * A `collection` was force-created.
         */
        ForceCreated: PlainDescriptor<Anonymize<Id1m1230297f7a>>;
        /**
         * A `collection` was destroyed.
         */
        Destroyed: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         * An `item` was issued.
         */
        Issued: PlainDescriptor<Anonymize<Ifvb1p5munhhv4>>;
        /**
         * An `item` was transferred.
         */
        Transferred: PlainDescriptor<Anonymize<I46h83ilqeed3g>>;
        /**
         * An `item` was destroyed.
         */
        Burned: PlainDescriptor<Anonymize<Ifvb1p5munhhv4>>;
        /**
         * Some `item` was frozen.
         */
        Frozen: PlainDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         * Some `item` was thawed.
         */
        Thawed: PlainDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         * Some `collection` was frozen.
         */
        CollectionFrozen: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         * Some `collection` was thawed.
         */
        CollectionThawed: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         * The owner changed.
         */
        OwnerChanged: PlainDescriptor<Anonymize<Icahse3uoi76n7>>;
        /**
         * The management team changed.
         */
        TeamChanged: PlainDescriptor<Anonymize<I75sj3uv7gnemk>>;
        /**
         * An `item` of a `collection` has been approved by the `owner` for transfer by
         * a `delegate`.
         */
        ApprovedTransfer: PlainDescriptor<Anonymize<I5fjkvcb5vr6nb>>;
        /**
         * An approval for a `delegate` account to transfer the `item` of an item
         * `collection` was cancelled by its `owner`.
         */
        ApprovalCancelled: PlainDescriptor<Anonymize<I5fjkvcb5vr6nb>>;
        /**
         * A `collection` has had its attributes changed by the `Force` origin.
         */
        ItemStatusChanged: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         * New metadata has been set for a `collection`.
         */
        CollectionMetadataSet: PlainDescriptor<Anonymize<I9viqhmdtuof5e>>;
        /**
         * Metadata has been cleared for a `collection`.
         */
        CollectionMetadataCleared: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         * New metadata has been set for an item.
         */
        MetadataSet: PlainDescriptor<Anonymize<Iceq9fmmp9aeqv>>;
        /**
         * Metadata has been cleared for an item.
         */
        MetadataCleared: PlainDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         * Metadata has been cleared for an item.
         */
        Redeposited: PlainDescriptor<Anonymize<I2gr1toekv86b9>>;
        /**
         * New attribute metadata has been set for a `collection` or `item`.
         */
        AttributeSet: PlainDescriptor<Anonymize<I5tvvgui05tn6e>>;
        /**
         * Attribute metadata has been cleared for a `collection` or `item`.
         */
        AttributeCleared: PlainDescriptor<Anonymize<Ibal0joadvdc2h>>;
        /**
         * Ownership acceptance has changed for an account.
         */
        OwnershipAcceptanceChanged: PlainDescriptor<Anonymize<I2v2ikqt2trp52>>;
        /**
         * Max supply has been set for a collection.
         */
        CollectionMaxSupplySet: PlainDescriptor<Anonymize<I6h88h8vba22v8>>;
        /**
         * The price was set for the instance.
         */
        ItemPriceSet: PlainDescriptor<Anonymize<If3057hi1g5qlo>>;
        /**
         * The price for the instance was removed.
         */
        ItemPriceRemoved: PlainDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         * An item was bought.
         */
        ItemBought: PlainDescriptor<Anonymize<Iaii5qf41d5n3d>>;
    };
    Nfts: {
        /**
         * A `collection` was created.
         */
        Created: PlainDescriptor<Anonymize<I9gqanbbbe917p>>;
        /**
         * A `collection` was force-created.
         */
        ForceCreated: PlainDescriptor<Anonymize<Id1m1230297f7a>>;
        /**
         * A `collection` was destroyed.
         */
        Destroyed: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         * An `item` was issued.
         */
        Issued: PlainDescriptor<Anonymize<Ifvb1p5munhhv4>>;
        /**
         * An `item` was transferred.
         */
        Transferred: PlainDescriptor<Anonymize<I46h83ilqeed3g>>;
        /**
         * An `item` was destroyed.
         */
        Burned: PlainDescriptor<Anonymize<Ifvb1p5munhhv4>>;
        /**
         * An `item` became non-transferable.
         */
        ItemTransferLocked: PlainDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         * An `item` became transferable.
         */
        ItemTransferUnlocked: PlainDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         * `item` metadata or attributes were locked.
         */
        ItemPropertiesLocked: PlainDescriptor<Anonymize<I1jj31tn29ie3c>>;
        /**
         * Some `collection` was locked.
         */
        CollectionLocked: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         * The owner changed.
         */
        OwnerChanged: PlainDescriptor<Anonymize<Icahse3uoi76n7>>;
        /**
         * The management team changed.
         */
        TeamChanged: PlainDescriptor<Anonymize<Ico8bnjc6taa27>>;
        /**
         * An `item` of a `collection` has been approved by the `owner` for transfer by
         * a `delegate`.
         */
        TransferApproved: PlainDescriptor<Anonymize<I78i1bvlonei69>>;
        /**
         * An approval for a `delegate` account to transfer the `item` of an item
         * `collection` was cancelled by its `owner`.
         */
        ApprovalCancelled: PlainDescriptor<Anonymize<I5fjkvcb5vr6nb>>;
        /**
         * All approvals of an item got cancelled.
         */
        AllApprovalsCancelled: PlainDescriptor<Anonymize<Ifvb1p5munhhv4>>;
        /**
         * A `collection` has had its config changed by the `Force` origin.
         */
        CollectionConfigChanged: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         * New metadata has been set for a `collection`.
         */
        CollectionMetadataSet: PlainDescriptor<Anonymize<I78u60nqh0etah>>;
        /**
         * Metadata has been cleared for a `collection`.
         */
        CollectionMetadataCleared: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         * New metadata has been set for an item.
         */
        ItemMetadataSet: PlainDescriptor<Anonymize<Icrkms46uh8tpb>>;
        /**
         * Metadata has been cleared for an item.
         */
        ItemMetadataCleared: PlainDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         * The deposit for a set of `item`s within a `collection` has been updated.
         */
        Redeposited: PlainDescriptor<Anonymize<I2gr1toekv86b9>>;
        /**
         * New attribute metadata has been set for a `collection` or `item`.
         */
        AttributeSet: PlainDescriptor<Anonymize<I5llu6o6a0go5i>>;
        /**
         * Attribute metadata has been cleared for a `collection` or `item`.
         */
        AttributeCleared: PlainDescriptor<Anonymize<I93r2effh7od84>>;
        /**
         * A new approval to modify item attributes was added.
         */
        ItemAttributesApprovalAdded: PlainDescriptor<Anonymize<I9i1f9mrso1hmf>>;
        /**
         * A new approval to modify item attributes was removed.
         */
        ItemAttributesApprovalRemoved: PlainDescriptor<Anonymize<I9i1f9mrso1hmf>>;
        /**
         * Ownership acceptance has changed for an account.
         */
        OwnershipAcceptanceChanged: PlainDescriptor<Anonymize<I2v2ikqt2trp52>>;
        /**
         * Max supply has been set for a collection.
         */
        CollectionMaxSupplySet: PlainDescriptor<Anonymize<I6h88h8vba22v8>>;
        /**
         * Mint settings for a collection had changed.
         */
        CollectionMintSettingsUpdated: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         * Event gets emitted when the `NextCollectionId` gets incremented.
         */
        NextCollectionIdIncremented: PlainDescriptor<Anonymize<I9ksla2si91s56>>;
        /**
         * The price was set for the item.
         */
        ItemPriceSet: PlainDescriptor<Anonymize<If3057hi1g5qlo>>;
        /**
         * The price for the item was removed.
         */
        ItemPriceRemoved: PlainDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         * An item was bought.
         */
        ItemBought: PlainDescriptor<Anonymize<Iaii5qf41d5n3d>>;
        /**
         * A tip was sent.
         */
        TipSent: PlainDescriptor<Anonymize<Id9j7b85otvjru>>;
        /**
         * An `item` swap intent was created.
         */
        SwapCreated: PlainDescriptor<Anonymize<Iaihk9pek2ajl9>>;
        /**
         * The swap was cancelled.
         */
        SwapCancelled: PlainDescriptor<Anonymize<Iaihk9pek2ajl9>>;
        /**
         * The swap has been claimed.
         */
        SwapClaimed: PlainDescriptor<Anonymize<Id9av23h47ufb2>>;
        /**
         * New attributes have been set for an `item` of the `collection`.
         */
        PreSignedAttributesSet: PlainDescriptor<Anonymize<Ib4kpnijas4jqp>>;
        /**
         * A new attribute in the `Pallet` namespace was set for the `collection` or an `item`
         * within that `collection`.
         */
        PalletAttributeSet: PlainDescriptor<Anonymize<I2vnu5k0u1i65h>>;
    };
    ForeignAssets: {
        /**
         * Some asset class was created.
         */
        Created: PlainDescriptor<Anonymize<Iecal8oi5f04ge>>;
        /**
         * Some assets were issued.
         */
        Issued: PlainDescriptor<Anonymize<Ic05ktr2oct1nn>>;
        /**
         * Some assets were transferred.
         */
        Transferred: PlainDescriptor<Anonymize<Ickf73l1j0hdnb>>;
        /**
         * Some assets were destroyed.
         */
        Burned: PlainDescriptor<Anonymize<Idet6j426d5cht>>;
        /**
         * The management team changed.
         */
        TeamChanged: PlainDescriptor<Anonymize<I40a0s39fbkvmt>>;
        /**
         * The owner changed.
         */
        OwnerChanged: PlainDescriptor<Anonymize<I82eq5jun2ru6g>>;
        /**
         * Some account `who` was frozen.
         */
        Frozen: PlainDescriptor<Anonymize<Iff9hjdvtonbq4>>;
        /**
         * Some account `who` was thawed.
         */
        Thawed: PlainDescriptor<Anonymize<Iff9hjdvtonbq4>>;
        /**
         * Some asset `asset_id` was frozen.
         */
        AssetFrozen: PlainDescriptor<Anonymize<I6liad1b2v1j3a>>;
        /**
         * Some asset `asset_id` was thawed.
         */
        AssetThawed: PlainDescriptor<Anonymize<I6liad1b2v1j3a>>;
        /**
         * Accounts were destroyed for given asset.
         */
        AccountsDestroyed: PlainDescriptor<Anonymize<I9h5hjufd36pl5>>;
        /**
         * Approvals were destroyed for given asset.
         */
        ApprovalsDestroyed: PlainDescriptor<Anonymize<I3tc6ks4ntde0e>>;
        /**
         * An asset class is in the process of being destroyed.
         */
        DestructionStarted: PlainDescriptor<Anonymize<I6liad1b2v1j3a>>;
        /**
         * An asset class was destroyed.
         */
        Destroyed: PlainDescriptor<Anonymize<I6liad1b2v1j3a>>;
        /**
         * Some asset class was force-created.
         */
        ForceCreated: PlainDescriptor<Anonymize<I82eq5jun2ru6g>>;
        /**
         * New metadata has been set for an asset.
         */
        MetadataSet: PlainDescriptor<Anonymize<Ift3nn9q4s5dc6>>;
        /**
         * Metadata has been cleared for an asset.
         */
        MetadataCleared: PlainDescriptor<Anonymize<I6liad1b2v1j3a>>;
        /**
         * (Additional) funds have been approved for transfer to a destination account.
         */
        ApprovedTransfer: PlainDescriptor<Anonymize<I9ll5ddutb9ikt>>;
        /**
         * An approval for account `delegate` was cancelled by `owner`.
         */
        ApprovalCancelled: PlainDescriptor<Anonymize<I304o4std85kum>>;
        /**
         * An `amount` was transferred in its entirety from `owner` to `destination` by
         * the approved `delegate`.
         */
        TransferredApproved: PlainDescriptor<Anonymize<I867k91d2log1e>>;
        /**
         * An asset has had its attributes changed by the `Force` origin.
         */
        AssetStatusChanged: PlainDescriptor<Anonymize<I6liad1b2v1j3a>>;
        /**
         * The min_balance of an asset has been updated by the asset owner.
         */
        AssetMinBalanceChanged: PlainDescriptor<Anonymize<Ica75ao8v192b0>>;
        /**
         * Some account `who` was created with a deposit from `depositor`.
         */
        Touched: PlainDescriptor<Anonymize<Ie3uql8p3fhpub>>;
        /**
         * Some account `who` was blocked.
         */
        Blocked: PlainDescriptor<Anonymize<Iff9hjdvtonbq4>>;
    };
};
type IError = {
    System: {
        /**
         * The name of specification does not match between the current runtime
         * and the new runtime.
         */
        InvalidSpecName: PlainDescriptor<undefined>;
        /**
         * The specification version is not allowed to decrease between the current runtime
         * and the new runtime.
         */
        SpecVersionNeedsToIncrease: PlainDescriptor<undefined>;
        /**
         * Failed to extract the runtime version from the new runtime.
         *
         * Either calling `Core_version` or decoding `RuntimeVersion` failed.
         */
        FailedToExtractRuntimeVersion: PlainDescriptor<undefined>;
        /**
         * Suicide called when the account has non-default composite data.
         */
        NonDefaultComposite: PlainDescriptor<undefined>;
        /**
         * There is a non-zero reference count preventing the account from being purged.
         */
        NonZeroRefCount: PlainDescriptor<undefined>;
        /**
         * The origin filter prevent the call to be dispatched.
         */
        CallFiltered: PlainDescriptor<undefined>;
    };
    ParachainSystem: {
        /**
         * Attempt to upgrade validation function while existing upgrade pending.
         */
        OverlappingUpgrades: PlainDescriptor<undefined>;
        /**
         * Polkadot currently prohibits this parachain from upgrading its validation function.
         */
        ProhibitedByPolkadot: PlainDescriptor<undefined>;
        /**
         * The supplied validation function has compiled into a blob larger than Polkadot is
         * willing to run.
         */
        TooBig: PlainDescriptor<undefined>;
        /**
         * The inherent which supplies the validation data did not run this block.
         */
        ValidationDataNotAvailable: PlainDescriptor<undefined>;
        /**
         * The inherent which supplies the host configuration did not run this block.
         */
        HostConfigurationNotAvailable: PlainDescriptor<undefined>;
        /**
         * No validation function upgrade is currently scheduled.
         */
        NotScheduled: PlainDescriptor<undefined>;
        /**
         * No code upgrade has been authorized.
         */
        NothingAuthorized: PlainDescriptor<undefined>;
        /**
         * The given code upgrade has not been authorized.
         */
        Unauthorized: PlainDescriptor<undefined>;
    };
    Balances: {
        /**
         * Vesting balance too high to send value.
         */
        VestingBalance: PlainDescriptor<undefined>;
        /**
         * Account liquidity restrictions prevent withdrawal.
         */
        LiquidityRestrictions: PlainDescriptor<undefined>;
        /**
         * Balance too low to send value.
         */
        InsufficientBalance: PlainDescriptor<undefined>;
        /**
         * Value too low to create account due to existential deposit.
         */
        ExistentialDeposit: PlainDescriptor<undefined>;
        /**
         * Transfer/payment would kill account.
         */
        Expendability: PlainDescriptor<undefined>;
        /**
         * A vesting schedule already exists for this account.
         */
        ExistingVestingSchedule: PlainDescriptor<undefined>;
        /**
         * Beneficiary account must pre-exist.
         */
        DeadAccount: PlainDescriptor<undefined>;
        /**
         * Number of named reserves exceed `MaxReserves`.
         */
        TooManyReserves: PlainDescriptor<undefined>;
        /**
         * Number of holds exceed `MaxHolds`.
         */
        TooManyHolds: PlainDescriptor<undefined>;
        /**
         * Number of freezes exceed `MaxFreezes`.
         */
        TooManyFreezes: PlainDescriptor<undefined>;
    };
    CollatorSelection: {
        /**
         * The pallet has too many candidates.
         */
        TooManyCandidates: PlainDescriptor<undefined>;
        /**
         * Leaving would result in too few candidates.
         */
        TooFewEligibleCollators: PlainDescriptor<undefined>;
        /**
         * Account is already a candidate.
         */
        AlreadyCandidate: PlainDescriptor<undefined>;
        /**
         * Account is not a candidate.
         */
        NotCandidate: PlainDescriptor<undefined>;
        /**
         * There are too many Invulnerables.
         */
        TooManyInvulnerables: PlainDescriptor<undefined>;
        /**
         * Account is already an Invulnerable.
         */
        AlreadyInvulnerable: PlainDescriptor<undefined>;
        /**
         * Account is not an Invulnerable.
         */
        NotInvulnerable: PlainDescriptor<undefined>;
        /**
         * Account has no associated validator ID.
         */
        NoAssociatedValidatorId: PlainDescriptor<undefined>;
        /**
         * Validator ID is not yet registered.
         */
        ValidatorNotRegistered: PlainDescriptor<undefined>;
    };
    Session: {
        /**
         * Invalid ownership proof.
         */
        InvalidProof: PlainDescriptor<undefined>;
        /**
         * No associated validator ID for account.
         */
        NoAssociatedValidatorId: PlainDescriptor<undefined>;
        /**
         * Registered duplicate key.
         */
        DuplicatedKey: PlainDescriptor<undefined>;
        /**
         * No keys are associated with this account.
         */
        NoKeys: PlainDescriptor<undefined>;
        /**
         * Key setting account is not live, so it's impossible to associate keys.
         */
        NoAccount: PlainDescriptor<undefined>;
    };
    XcmpQueue: {
        /**
         * Failed to send XCM message.
         */
        FailedToSend: PlainDescriptor<undefined>;
        /**
         * Bad XCM origin.
         */
        BadXcmOrigin: PlainDescriptor<undefined>;
        /**
         * Bad XCM data.
         */
        BadXcm: PlainDescriptor<undefined>;
        /**
         * Bad overweight index.
         */
        BadOverweightIndex: PlainDescriptor<undefined>;
        /**
         * Provided weight is possibly not enough to execute the message.
         */
        WeightOverLimit: PlainDescriptor<undefined>;
    };
    PolkadotXcm: {
        /**
         * The desired destination was unreachable, generally because there is a no way of routing
         * to it.
         */
        Unreachable: PlainDescriptor<undefined>;
        /**
         * There was some other issue (i.e. not to do with routing) in sending the message.
         * Perhaps a lack of space for buffering the message.
         */
        SendFailure: PlainDescriptor<undefined>;
        /**
         * The message execution fails the filter.
         */
        Filtered: PlainDescriptor<undefined>;
        /**
         * The message's weight could not be determined.
         */
        UnweighableMessage: PlainDescriptor<undefined>;
        /**
         * The destination `MultiLocation` provided cannot be inverted.
         */
        DestinationNotInvertible: PlainDescriptor<undefined>;
        /**
         * The assets to be sent are empty.
         */
        Empty: PlainDescriptor<undefined>;
        /**
         * Could not re-anchor the assets to declare the fees for the destination chain.
         */
        CannotReanchor: PlainDescriptor<undefined>;
        /**
         * Too many assets have been attempted for transfer.
         */
        TooManyAssets: PlainDescriptor<undefined>;
        /**
         * Origin is invalid for sending.
         */
        InvalidOrigin: PlainDescriptor<undefined>;
        /**
         * The version of the `Versioned` value used is not able to be interpreted.
         */
        BadVersion: PlainDescriptor<undefined>;
        /**
         * The given location could not be used (e.g. because it cannot be expressed in the
         * desired version of XCM).
         */
        BadLocation: PlainDescriptor<undefined>;
        /**
         * The referenced subscription could not be found.
         */
        NoSubscription: PlainDescriptor<undefined>;
        /**
         * The location is invalid since it already has a subscription from us.
         */
        AlreadySubscribed: PlainDescriptor<undefined>;
        /**
         * Invalid asset for the operation.
         */
        InvalidAsset: PlainDescriptor<undefined>;
        /**
         * The owner does not own (all) of the asset that they wish to do the operation on.
         */
        LowBalance: PlainDescriptor<undefined>;
        /**
         * The asset owner has too many locks on the asset.
         */
        TooManyLocks: PlainDescriptor<undefined>;
        /**
         * The given account is not an identifiable sovereign account for any location.
         */
        AccountNotSovereign: PlainDescriptor<undefined>;
        /**
         * The operation required fees to be paid which the initiator could not meet.
         */
        FeesNotMet: PlainDescriptor<undefined>;
        /**
         * A remote lock with the corresponding data could not be found.
         */
        LockNotFound: PlainDescriptor<undefined>;
        /**
         * The unlock operation cannot succeed because there are still consumers of the lock.
         */
        InUse: PlainDescriptor<undefined>;
    };
    DmpQueue: {
        /**
         * The message index given is unknown.
         */
        Unknown: PlainDescriptor<undefined>;
        /**
         * The amount of weight given is possibly not enough for executing the message.
         */
        OverLimit: PlainDescriptor<undefined>;
    };
    Utility: {
        /**
         * Too many calls batched.
         */
        TooManyCalls: PlainDescriptor<undefined>;
    };
    Multisig: {
        /**
         * Threshold must be 2 or greater.
         */
        MinimumThreshold: PlainDescriptor<undefined>;
        /**
         * Call is already approved by this signatory.
         */
        AlreadyApproved: PlainDescriptor<undefined>;
        /**
         * Call doesn't need any (more) approvals.
         */
        NoApprovalsNeeded: PlainDescriptor<undefined>;
        /**
         * There are too few signatories in the list.
         */
        TooFewSignatories: PlainDescriptor<undefined>;
        /**
         * There are too many signatories in the list.
         */
        TooManySignatories: PlainDescriptor<undefined>;
        /**
         * The signatories were provided out of order; they should be ordered.
         */
        SignatoriesOutOfOrder: PlainDescriptor<undefined>;
        /**
         * The sender was contained in the other signatories; it shouldn't be.
         */
        SenderInSignatories: PlainDescriptor<undefined>;
        /**
         * Multisig operation not found when attempting to cancel.
         */
        NotFound: PlainDescriptor<undefined>;
        /**
         * Only the account that originally created the multisig is able to cancel it.
         */
        NotOwner: PlainDescriptor<undefined>;
        /**
         * No timepoint was given, yet the multisig operation is already underway.
         */
        NoTimepoint: PlainDescriptor<undefined>;
        /**
         * A different timepoint was given to the multisig operation that is underway.
         */
        WrongTimepoint: PlainDescriptor<undefined>;
        /**
         * A timepoint was given, yet no multisig operation is underway.
         */
        UnexpectedTimepoint: PlainDescriptor<undefined>;
        /**
         * The maximum weight information provided was too low.
         */
        MaxWeightTooLow: PlainDescriptor<undefined>;
        /**
         * The data to be stored is already stored.
         */
        AlreadyStored: PlainDescriptor<undefined>;
    };
    Proxy: {
        /**
         * There are too many proxies registered or too many announcements pending.
         */
        TooMany: PlainDescriptor<undefined>;
        /**
         * Proxy registration not found.
         */
        NotFound: PlainDescriptor<undefined>;
        /**
         * Sender is not a proxy of the account to be proxied.
         */
        NotProxy: PlainDescriptor<undefined>;
        /**
         * A call which is incompatible with the proxy type's filter was attempted.
         */
        Unproxyable: PlainDescriptor<undefined>;
        /**
         * Account is already a proxy.
         */
        Duplicate: PlainDescriptor<undefined>;
        /**
         * Call may not be made by proxy because it may escalate its privileges.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         * Announcement, if made at all, was made too recently.
         */
        Unannounced: PlainDescriptor<undefined>;
        /**
         * Cannot add self as proxy.
         */
        NoSelfProxy: PlainDescriptor<undefined>;
    };
    Assets: {
        /**
         * Account balance must be greater than or equal to the transfer amount.
         */
        BalanceLow: PlainDescriptor<undefined>;
        /**
         * The account to alter does not exist.
         */
        NoAccount: PlainDescriptor<undefined>;
        /**
         * The signing account has no permission to do the operation.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         * The given asset ID is unknown.
         */
        Unknown: PlainDescriptor<undefined>;
        /**
         * The origin account is frozen.
         */
        Frozen: PlainDescriptor<undefined>;
        /**
         * The asset ID is already taken.
         */
        InUse: PlainDescriptor<undefined>;
        /**
         * Invalid witness data given.
         */
        BadWitness: PlainDescriptor<undefined>;
        /**
         * Minimum balance should be non-zero.
         */
        MinBalanceZero: PlainDescriptor<undefined>;
        /**
         * Unable to increment the consumer reference counters on the account. Either no provider
         * reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
         * fewer then the maximum number of consumers has been reached.
         */
        UnavailableConsumer: PlainDescriptor<undefined>;
        /**
         * Invalid metadata given.
         */
        BadMetadata: PlainDescriptor<undefined>;
        /**
         * No approval exists that would allow the transfer.
         */
        Unapproved: PlainDescriptor<undefined>;
        /**
         * The source account would not survive the transfer and it needs to stay alive.
         */
        WouldDie: PlainDescriptor<undefined>;
        /**
         * The asset-account already exists.
         */
        AlreadyExists: PlainDescriptor<undefined>;
        /**
         * The asset-account doesn't have an associated deposit.
         */
        NoDeposit: PlainDescriptor<undefined>;
        /**
         * The operation would result in funds being burned.
         */
        WouldBurn: PlainDescriptor<undefined>;
        /**
         * The asset is a live asset and is actively being used. Usually emit for operations such
         * as `start_destroy` which require the asset to be in a destroying state.
         */
        LiveAsset: PlainDescriptor<undefined>;
        /**
         * The asset is not live, and likely being destroyed.
         */
        AssetNotLive: PlainDescriptor<undefined>;
        /**
         * The asset status is not the expected status.
         */
        IncorrectStatus: PlainDescriptor<undefined>;
        /**
         * The asset should be frozen before the given operation.
         */
        NotFrozen: PlainDescriptor<undefined>;
        /**
         * Callback action resulted in error
         */
        CallbackFailed: PlainDescriptor<undefined>;
    };
    Uniques: {
        /**
         * The signing account has no permission to do the operation.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         * The given item ID is unknown.
         */
        UnknownCollection: PlainDescriptor<undefined>;
        /**
         * The item ID has already been used for an item.
         */
        AlreadyExists: PlainDescriptor<undefined>;
        /**
         * The owner turned out to be different to what was expected.
         */
        WrongOwner: PlainDescriptor<undefined>;
        /**
         * Invalid witness data given.
         */
        BadWitness: PlainDescriptor<undefined>;
        /**
         * The item ID is already taken.
         */
        InUse: PlainDescriptor<undefined>;
        /**
         * The item or collection is frozen.
         */
        Frozen: PlainDescriptor<undefined>;
        /**
         * The delegate turned out to be different to what was expected.
         */
        WrongDelegate: PlainDescriptor<undefined>;
        /**
         * There is no delegate approved.
         */
        NoDelegate: PlainDescriptor<undefined>;
        /**
         * No approval exists that would allow the transfer.
         */
        Unapproved: PlainDescriptor<undefined>;
        /**
         * The named owner has not signed ownership of the collection is acceptable.
         */
        Unaccepted: PlainDescriptor<undefined>;
        /**
         * The item is locked.
         */
        Locked: PlainDescriptor<undefined>;
        /**
         * All items have been minted.
         */
        MaxSupplyReached: PlainDescriptor<undefined>;
        /**
         * The max supply has already been set.
         */
        MaxSupplyAlreadySet: PlainDescriptor<undefined>;
        /**
         * The provided max supply is less to the amount of items a collection already has.
         */
        MaxSupplyTooSmall: PlainDescriptor<undefined>;
        /**
         * The given item ID is unknown.
         */
        UnknownItem: PlainDescriptor<undefined>;
        /**
         * Item is not for sale.
         */
        NotForSale: PlainDescriptor<undefined>;
        /**
         * The provided bid is too low.
         */
        BidTooLow: PlainDescriptor<undefined>;
    };
    Nfts: {
        /**
         * The signing account has no permission to do the operation.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         * The given item ID is unknown.
         */
        UnknownCollection: PlainDescriptor<undefined>;
        /**
         * The item ID has already been used for an item.
         */
        AlreadyExists: PlainDescriptor<undefined>;
        /**
         * The approval had a deadline that expired, so the approval isn't valid anymore.
         */
        ApprovalExpired: PlainDescriptor<undefined>;
        /**
         * The owner turned out to be different to what was expected.
         */
        WrongOwner: PlainDescriptor<undefined>;
        /**
         * The witness data given does not match the current state of the chain.
         */
        BadWitness: PlainDescriptor<undefined>;
        /**
         * Collection ID is already taken.
         */
        CollectionIdInUse: PlainDescriptor<undefined>;
        /**
         * Items within that collection are non-transferable.
         */
        ItemsNonTransferable: PlainDescriptor<undefined>;
        /**
         * The provided account is not a delegate.
         */
        NotDelegate: PlainDescriptor<undefined>;
        /**
         * The delegate turned out to be different to what was expected.
         */
        WrongDelegate: PlainDescriptor<undefined>;
        /**
         * No approval exists that would allow the transfer.
         */
        Unapproved: PlainDescriptor<undefined>;
        /**
         * The named owner has not signed ownership acceptance of the collection.
         */
        Unaccepted: PlainDescriptor<undefined>;
        /**
         * The item is locked (non-transferable).
         */
        ItemLocked: PlainDescriptor<undefined>;
        /**
         * Item's attributes are locked.
         */
        LockedItemAttributes: PlainDescriptor<undefined>;
        /**
         * Collection's attributes are locked.
         */
        LockedCollectionAttributes: PlainDescriptor<undefined>;
        /**
         * Item's metadata is locked.
         */
        LockedItemMetadata: PlainDescriptor<undefined>;
        /**
         * Collection's metadata is locked.
         */
        LockedCollectionMetadata: PlainDescriptor<undefined>;
        /**
         * All items have been minted.
         */
        MaxSupplyReached: PlainDescriptor<undefined>;
        /**
         * The max supply is locked and can't be changed.
         */
        MaxSupplyLocked: PlainDescriptor<undefined>;
        /**
         * The provided max supply is less than the number of items a collection already has.
         */
        MaxSupplyTooSmall: PlainDescriptor<undefined>;
        /**
         * The given item ID is unknown.
         */
        UnknownItem: PlainDescriptor<undefined>;
        /**
         * Swap doesn't exist.
         */
        UnknownSwap: PlainDescriptor<undefined>;
        /**
         * The given item has no metadata set.
         */
        MetadataNotFound: PlainDescriptor<undefined>;
        /**
         * The provided attribute can't be found.
         */
        AttributeNotFound: PlainDescriptor<undefined>;
        /**
         * Item is not for sale.
         */
        NotForSale: PlainDescriptor<undefined>;
        /**
         * The provided bid is too low.
         */
        BidTooLow: PlainDescriptor<undefined>;
        /**
         * The item has reached its approval limit.
         */
        ReachedApprovalLimit: PlainDescriptor<undefined>;
        /**
         * The deadline has already expired.
         */
        DeadlineExpired: PlainDescriptor<undefined>;
        /**
         * The duration provided should be less than or equal to `MaxDeadlineDuration`.
         */
        WrongDuration: PlainDescriptor<undefined>;
        /**
         * The method is disabled by system settings.
         */
        MethodDisabled: PlainDescriptor<undefined>;
        /**
         * The provided setting can't be set.
         */
        WrongSetting: PlainDescriptor<undefined>;
        /**
         * Item's config already exists and should be equal to the provided one.
         */
        InconsistentItemConfig: PlainDescriptor<undefined>;
        /**
         * Config for a collection or an item can't be found.
         */
        NoConfig: PlainDescriptor<undefined>;
        /**
         * Some roles were not cleared.
         */
        RolesNotCleared: PlainDescriptor<undefined>;
        /**
         * Mint has not started yet.
         */
        MintNotStarted: PlainDescriptor<undefined>;
        /**
         * Mint has already ended.
         */
        MintEnded: PlainDescriptor<undefined>;
        /**
         * The provided Item was already used for claiming.
         */
        AlreadyClaimed: PlainDescriptor<undefined>;
        /**
         * The provided data is incorrect.
         */
        IncorrectData: PlainDescriptor<undefined>;
        /**
         * The extrinsic was sent by the wrong origin.
         */
        WrongOrigin: PlainDescriptor<undefined>;
        /**
         * The provided signature is incorrect.
         */
        WrongSignature: PlainDescriptor<undefined>;
        /**
         * The provided metadata might be too long.
         */
        IncorrectMetadata: PlainDescriptor<undefined>;
        /**
         * Can't set more attributes per one call.
         */
        MaxAttributesLimitReached: PlainDescriptor<undefined>;
        /**
         * The provided namespace isn't supported in this call.
         */
        WrongNamespace: PlainDescriptor<undefined>;
        /**
         * Can't delete non-empty collections.
         */
        CollectionNotEmpty: PlainDescriptor<undefined>;
        /**
         * The witness data should be provided.
         */
        WitnessRequired: PlainDescriptor<undefined>;
    };
    ForeignAssets: {
        /**
         * Account balance must be greater than or equal to the transfer amount.
         */
        BalanceLow: PlainDescriptor<undefined>;
        /**
         * The account to alter does not exist.
         */
        NoAccount: PlainDescriptor<undefined>;
        /**
         * The signing account has no permission to do the operation.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         * The given asset ID is unknown.
         */
        Unknown: PlainDescriptor<undefined>;
        /**
         * The origin account is frozen.
         */
        Frozen: PlainDescriptor<undefined>;
        /**
         * The asset ID is already taken.
         */
        InUse: PlainDescriptor<undefined>;
        /**
         * Invalid witness data given.
         */
        BadWitness: PlainDescriptor<undefined>;
        /**
         * Minimum balance should be non-zero.
         */
        MinBalanceZero: PlainDescriptor<undefined>;
        /**
         * Unable to increment the consumer reference counters on the account. Either no provider
         * reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
         * fewer then the maximum number of consumers has been reached.
         */
        UnavailableConsumer: PlainDescriptor<undefined>;
        /**
         * Invalid metadata given.
         */
        BadMetadata: PlainDescriptor<undefined>;
        /**
         * No approval exists that would allow the transfer.
         */
        Unapproved: PlainDescriptor<undefined>;
        /**
         * The source account would not survive the transfer and it needs to stay alive.
         */
        WouldDie: PlainDescriptor<undefined>;
        /**
         * The asset-account already exists.
         */
        AlreadyExists: PlainDescriptor<undefined>;
        /**
         * The asset-account doesn't have an associated deposit.
         */
        NoDeposit: PlainDescriptor<undefined>;
        /**
         * The operation would result in funds being burned.
         */
        WouldBurn: PlainDescriptor<undefined>;
        /**
         * The asset is a live asset and is actively being used. Usually emit for operations such
         * as `start_destroy` which require the asset to be in a destroying state.
         */
        LiveAsset: PlainDescriptor<undefined>;
        /**
         * The asset is not live, and likely being destroyed.
         */
        AssetNotLive: PlainDescriptor<undefined>;
        /**
         * The asset status is not the expected status.
         */
        IncorrectStatus: PlainDescriptor<undefined>;
        /**
         * The asset should be frozen before the given operation.
         */
        NotFrozen: PlainDescriptor<undefined>;
        /**
         * Callback action resulted in error
         */
        CallbackFailed: PlainDescriptor<undefined>;
    };
};
type IConstants = {
    System: {
        /**
         * Block & extrinsics weights: base values and limits.
         */
        BlockWeights: PlainDescriptor<Anonymize<In7a38730s6qs>>;
        /**
         * The maximum length of a block (in bytes).
         */
        BlockLength: PlainDescriptor<Anonymize<If15el53dd76v9>>;
        /**
         * Maximum number of block number to block hash mappings to keep (oldest pruned first).
         */
        BlockHashCount: PlainDescriptor<number>;
        /**
         * The weight of runtime database operations the runtime can invoke.
         */
        DbWeight: PlainDescriptor<Anonymize<I9s0ave7t0vnrk>>;
        /**
         * Get the chain's current version.
         */
        Version: PlainDescriptor<Anonymize<Ic6nglu2db2c36>>;
        /**
         * The designated SS58 prefix of this chain.
         *
         * This replaces the "ss58Format" property declared in the chain spec. Reason is
         * that the runtime should know about the prefix in order to make use of it as
         * an identifier of the chain.
         */
        SS58Prefix: PlainDescriptor<number>;
    };
    Timestamp: {
        /**
         * The minimum period between blocks.
         *
         * Be aware that this is different to the *expected* period that the block production
         * apparatus provides. Your chosen consensus system will generally work with this to
         * determine a sensible block time. For example, in the Aura pallet it will be double this
         * period on default settings.
         */
        MinimumPeriod: PlainDescriptor<bigint>;
    };
    Balances: {
        /**
         * The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO!
         *
         * If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for
         * this pallet. However, you do so at your own risk: this will open up a major DoS vector.
         * In case you have multiple sources of provider references, you may also get unexpected
         * behaviour if you set this to zero.
         *
         * Bottom line: Do yourself a favour and make it at least one!
         */
        ExistentialDeposit: PlainDescriptor<bigint>;
        /**
         * The maximum number of locks that should exist on an account.
         * Not strictly enforced, but used for weight estimation.
         */
        MaxLocks: PlainDescriptor<number>;
        /**
         * The maximum number of named reserves that can exist on an account.
         */
        MaxReserves: PlainDescriptor<number>;
        /**
         * The maximum number of holds that can exist on an account at any time.
         */
        MaxHolds: PlainDescriptor<number>;
        /**
         * The maximum number of individual freeze locks that can exist on an account at any time.
         */
        MaxFreezes: PlainDescriptor<number>;
    };
    TransactionPayment: {
        /**
         * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
         * `priority`
         *
         * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
         * added to a tip component in regular `priority` calculations.
         * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
         * extrinsic (with no tip), by including a tip value greater than the virtual tip.
         *
         * ```rust,ignore
         * // For `Normal`
         * let priority = priority_calc(tip);
         *
         * // For `Operational`
         * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
         * let priority = priority_calc(tip + virtual_tip);
         * ```
         *
         * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
         * sent with the transaction. So, not only does the transaction get a priority bump based
         * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
         * transactions.
         */
        OperationalFeeMultiplier: PlainDescriptor<number>;
    };
    Utility: {
        /**
         * The limit on the number of batched calls.
         */
        batched_calls_limit: PlainDescriptor<number>;
    };
    Multisig: {
        /**
         * The base amount of currency needed to reserve for creating a multisig execution or to
         * store a dispatch call for later.
         *
         * This is held for an additional storage item whose value size is
         * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
         * `32 + sizeof(AccountId)` bytes.
         */
        DepositBase: PlainDescriptor<bigint>;
        /**
         * The amount of currency needed per unit threshold when creating a multisig execution.
         *
         * This is held for adding 32 bytes more into a pre-existing storage value.
         */
        DepositFactor: PlainDescriptor<bigint>;
        /**
         * The maximum amount of signatories allowed in the multisig.
         */
        MaxSignatories: PlainDescriptor<number>;
    };
    Proxy: {
        /**
         * The base amount of currency needed to reserve for creating a proxy.
         *
         * This is held for an additional storage item whose value size is
         * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
         */
        ProxyDepositBase: PlainDescriptor<bigint>;
        /**
         * The amount of currency needed per proxy added.
         *
         * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
         * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
         * into account `32 + proxy_type.encode().len()` bytes of data.
         */
        ProxyDepositFactor: PlainDescriptor<bigint>;
        /**
         * The maximum amount of proxies allowed for a single account.
         */
        MaxProxies: PlainDescriptor<number>;
        /**
         * The maximum amount of time-delayed announcements that are allowed to be pending.
         */
        MaxPending: PlainDescriptor<number>;
        /**
         * The base amount of currency needed to reserve for creating an announcement.
         *
         * This is held when a new storage item holding a `Balance` is created (typically 16
         * bytes).
         */
        AnnouncementDepositBase: PlainDescriptor<bigint>;
        /**
         * The amount of currency needed per announcement made.
         *
         * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
         * into a pre-existing storage value.
         */
        AnnouncementDepositFactor: PlainDescriptor<bigint>;
    };
    Assets: {
        /**
         * Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call.
         *
         * Must be configured to result in a weight that makes each call fit in a block.
         */
        RemoveItemsLimit: PlainDescriptor<number>;
        /**
         * The basic amount of funds that must be reserved for an asset.
         */
        AssetDeposit: PlainDescriptor<bigint>;
        /**
         * The amount of funds that must be reserved for a non-provider asset account to be
         * maintained.
         */
        AssetAccountDeposit: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved when adding metadata to your asset.
         */
        MetadataDepositBase: PlainDescriptor<bigint>;
        /**
         * The additional funds that must be reserved for the number of bytes you store in your
         * metadata.
         */
        MetadataDepositPerByte: PlainDescriptor<bigint>;
        /**
         * The amount of funds that must be reserved when creating a new approval.
         */
        ApprovalDeposit: PlainDescriptor<bigint>;
        /**
         * The maximum length of a name or symbol stored on-chain.
         */
        StringLimit: PlainDescriptor<number>;
    };
    Uniques: {
        /**
         * The basic amount of funds that must be reserved for collection.
         */
        CollectionDeposit: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved for an item.
         */
        ItemDeposit: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved when adding metadata to your item.
         */
        MetadataDepositBase: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved when adding an attribute to an item.
         */
        AttributeDepositBase: PlainDescriptor<bigint>;
        /**
         * The additional funds that must be reserved for the number of bytes store in metadata,
         * either "normal" metadata or attribute metadata.
         */
        DepositPerByte: PlainDescriptor<bigint>;
        /**
         * The maximum length of data stored on-chain.
         */
        StringLimit: PlainDescriptor<number>;
        /**
         * The maximum length of an attribute key.
         */
        KeyLimit: PlainDescriptor<number>;
        /**
         * The maximum length of an attribute value.
         */
        ValueLimit: PlainDescriptor<number>;
    };
    Nfts: {
        /**
         * The basic amount of funds that must be reserved for collection.
         */
        CollectionDeposit: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved for an item.
         */
        ItemDeposit: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved when adding metadata to your item.
         */
        MetadataDepositBase: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved when adding an attribute to an item.
         */
        AttributeDepositBase: PlainDescriptor<bigint>;
        /**
         * The additional funds that must be reserved for the number of bytes store in metadata,
         * either "normal" metadata or attribute metadata.
         */
        DepositPerByte: PlainDescriptor<bigint>;
        /**
         * The maximum length of data stored on-chain.
         */
        StringLimit: PlainDescriptor<number>;
        /**
         * The maximum length of an attribute key.
         */
        KeyLimit: PlainDescriptor<number>;
        /**
         * The maximum length of an attribute value.
         */
        ValueLimit: PlainDescriptor<number>;
        /**
         * The maximum approvals an item could have.
         */
        ApprovalsLimit: PlainDescriptor<number>;
        /**
         * The maximum attributes approvals an item could have.
         */
        ItemAttributesApprovalsLimit: PlainDescriptor<number>;
        /**
         * The max number of tips a user could send.
         */
        MaxTips: PlainDescriptor<number>;
        /**
         * The max duration in blocks for deadlines.
         */
        MaxDeadlineDuration: PlainDescriptor<number>;
        /**
         * The max number of attributes a user could set per call.
         */
        MaxAttributesPerCall: PlainDescriptor<number>;
        /**
         * Disables some of pallet's features.
         */
        Features: PlainDescriptor<bigint>;
    };
    ForeignAssets: {
        /**
         * Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call.
         *
         * Must be configured to result in a weight that makes each call fit in a block.
         */
        RemoveItemsLimit: PlainDescriptor<number>;
        /**
         * The basic amount of funds that must be reserved for an asset.
         */
        AssetDeposit: PlainDescriptor<bigint>;
        /**
         * The amount of funds that must be reserved for a non-provider asset account to be
         * maintained.
         */
        AssetAccountDeposit: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved when adding metadata to your asset.
         */
        MetadataDepositBase: PlainDescriptor<bigint>;
        /**
         * The additional funds that must be reserved for the number of bytes you store in your
         * metadata.
         */
        MetadataDepositPerByte: PlainDescriptor<bigint>;
        /**
         * The amount of funds that must be reserved when creating a new approval.
         */
        ApprovalDeposit: PlainDescriptor<bigint>;
        /**
         * The maximum length of a name or symbol stored on-chain.
         */
        StringLimit: PlainDescriptor<number>;
    };
};
type IViewFns = {};
type IRuntimeCalls = {
    /**
     * API necessary for block authorship with aura.
     */
    AuraApi: {
        /**
         * Returns the slot duration for Aura.
         *
         * Currently, only the value provided by this type at genesis will be used.
         */
        slot_duration: RuntimeDescriptor<[], bigint>;
        /**
         * Return the current set of authorities.
         */
        authorities: RuntimeDescriptor<[], Anonymize<Ic5m5lp1oioo8r>>;
    };
    /**
     * The `Core` runtime api that every Substrate runtime needs to implement.
     */
    Core: {
        /**
         * Returns the version of the runtime.
         */
        version: RuntimeDescriptor<[], Anonymize<Ic6nglu2db2c36>>;
        /**
         * Execute the given block.
         */
        execute_block: RuntimeDescriptor<[block: Anonymize<Iaqet9jc3ihboe>], undefined>;
        /**
         * Initialize a block with the given header.
         */
        initialize_block: RuntimeDescriptor<[header: Anonymize<Ic952bubvq4k7d>], undefined>;
    };
    /**
     * The `Metadata` api trait that returns metadata for the runtime.
     */
    Metadata: {
        /**
         * Returns the metadata of a runtime.
         */
        metadata: RuntimeDescriptor<[], Binary>;
        /**
         * Returns the metadata at a given version.
         *
         * If the given `version` isn't supported, this will return `None`.
         * Use [`Self::metadata_versions`] to find out about supported metadata version of the runtime.
         */
        metadata_at_version: RuntimeDescriptor<[version: number], Anonymize<Iabpgqcjikia83>>;
        /**
         * Returns the supported metadata versions.
         *
         * This can be used to call `metadata_at_version`.
         */
        metadata_versions: RuntimeDescriptor<[], Anonymize<Icgljjb6j82uhn>>;
    };
    /**
     * The `BlockBuilder` api trait that provides the required functionality for building a block.
     */
    BlockBuilder: {
        /**
         * Apply the given extrinsic.
         *
         * Returns an inclusion outcome which specifies if this extrinsic is included in
         * this block or not.
         */
        apply_extrinsic: RuntimeDescriptor<[extrinsic: Binary], Anonymize<I37hdfj6084nn6>>;
        /**
         * Finish the current block.
         */
        finalize_block: RuntimeDescriptor<[], Anonymize<Ic952bubvq4k7d>>;
        /**
         * Generate inherent extrinsics. The inherent data will vary from chain to chain.
         */
        inherent_extrinsics: RuntimeDescriptor<[inherent: Anonymize<If7uv525tdvv7a>], Anonymize<Itom7fk49o0c9>>;
        /**
         * Check that the inherents are valid. The inherent data will vary from chain to chain.
         */
        check_inherents: RuntimeDescriptor<[block: Anonymize<Iaqet9jc3ihboe>, data: Anonymize<If7uv525tdvv7a>], Anonymize<I2an1fs2eiebjp>>;
    };
    /**
     * The `TaggedTransactionQueue` api trait for interfering with the transaction queue.
     */
    TaggedTransactionQueue: {
        /**
         * Validate the transaction.
         *
         * This method is invoked by the transaction pool to learn details about given transaction.
         * The implementation should make sure to verify the correctness of the transaction
         * against current state. The given `block_hash` corresponds to the hash of the block
         * that is used as current state.
         *
         * Note that this call may be performed by the pool multiple times and transactions
         * might be verified in any possible order.
         */
        validate_transaction: RuntimeDescriptor<[source: TransactionValidityTransactionSource, tx: Binary, block_hash: FixedSizeBinary<32>], Anonymize<Iajbob6uln5jct>>;
    };
    /**
     * The offchain worker api.
     */
    OffchainWorkerApi: {
        /**
         * Starts the off-chain task for given block header.
         */
        offchain_worker: RuntimeDescriptor<[header: Anonymize<Ic952bubvq4k7d>], undefined>;
    };
    /**
     * Session keys runtime api.
     */
    SessionKeys: {
        /**
         * Generate a set of session keys with optionally using the given seed.
         * The keys should be stored within the keystore exposed via runtime
         * externalities.
         *
         * The seed needs to be a valid `utf8` string.
         *
         * Returns the concatenated SCALE encoded public keys.
         */
        generate_session_keys: RuntimeDescriptor<[seed: Anonymize<Iabpgqcjikia83>], Binary>;
        /**
         * Decode the given public session keys.
         *
         * Returns the list of public raw public keys + key type.
         */
        decode_session_keys: RuntimeDescriptor<[encoded: Binary], Anonymize<Icerf8h8pdu8ss>>;
    };
    /**
     * The API to query account nonce.
     */
    AccountNonceApi: {
        /**
         * Get current account nonce of given `AccountId`.
         */
        account_nonce: RuntimeDescriptor<[account: SS58String], number>;
    };
    /**
    
     */
    TransactionPaymentApi: {
        /**
        
         */
        query_info: RuntimeDescriptor<[uxt: Binary, len: number], Anonymize<I6spmpef2c7svf>>;
        /**
        
         */
        query_fee_details: RuntimeDescriptor<[uxt: Binary, len: number], Anonymize<Iei2mvq0mjvt81>>;
        /**
        
         */
        query_weight_to_fee: RuntimeDescriptor<[weight: Anonymize<I4q39t5hn830vp>], bigint>;
        /**
        
         */
        query_length_to_fee: RuntimeDescriptor<[length: number], bigint>;
    };
    /**
    
     */
    TransactionPaymentCallApi: {
        /**
         * Query information of a dispatch class, weight, and fee of a given encoded `Call`.
         */
        query_call_info: RuntimeDescriptor<[call: Anonymize<I4or8ectd3dmig>, len: number], Anonymize<I6spmpef2c7svf>>;
        /**
         * Query fee details of a given encoded `Call`.
         */
        query_call_fee_details: RuntimeDescriptor<[call: Anonymize<I4or8ectd3dmig>, len: number], Anonymize<Iei2mvq0mjvt81>>;
        /**
         * Query the output of the current `WeightToFee` given some input.
         */
        query_weight_to_fee: RuntimeDescriptor<[weight: Anonymize<I4q39t5hn830vp>], bigint>;
        /**
         * Query the output of the current `LengthToFee` given some input.
         */
        query_length_to_fee: RuntimeDescriptor<[length: number], bigint>;
    };
    /**
     * The API for querying account's balances from runtime.
     */
    FungiblesApi: {
        /**
         * Returns the list of all [`MultiAsset`] that an `AccountId` has.
         */
        query_account_balances: RuntimeDescriptor<[account: SS58String], Anonymize<Ich0usrc4sg28j>>;
    };
    /**
     * Runtime api to collect information about a collation.
     */
    CollectCollationInfo: {
        /**
         * Collect information about a collation.
         *
         * The given `header` is the header of the built block for that
         * we are collecting the collation info for.
         */
        collect_collation_info: RuntimeDescriptor<[header: Anonymize<Ic952bubvq4k7d>], Anonymize<Ic1d4u2opv3fst>>;
    };
    /**
     * API to interact with GenesisConfig for the runtime
     */
    GenesisBuilder: {
        /**
         * Creates the default `GenesisConfig` and returns it as a JSON blob.
         *
         * This function instantiates the default `GenesisConfig` struct for the runtime and serializes it into a JSON
         * blob. It returns a `Vec<u8>` containing the JSON representation of the default `GenesisConfig`.
         */
        create_default_config: RuntimeDescriptor<[], Binary>;
        /**
         * Build `GenesisConfig` from a JSON blob not using any defaults and store it in the storage.
         *
         * This function deserializes the full `GenesisConfig` from the given JSON blob and puts it into the storage.
         * If the provided JSON blob is incorrect or incomplete or the deserialization fails, an error is returned.
         * It is recommended to log any errors encountered during the process.
         *
         * Please note that provided json blob must contain all `GenesisConfig` fields, no defaults will be used.
         */
        build_config: RuntimeDescriptor<[json: Binary], Anonymize<Ie9sr1iqcg3cgm>>;
    };
};
type IAsset = PlainDescriptor<number>;
export type AhpDispatchError = Anonymize<I55o1f0t1icsot>;
type PalletsTypedef = {
    __storage: IStorage;
    __tx: ICalls;
    __event: IEvent;
    __error: IError;
    __const: IConstants;
    __view: IViewFns;
};
export type Ahp = {
    descriptors: {
        pallets: PalletsTypedef;
        apis: IRuntimeCalls;
    } & Promise<any>;
    metadataTypes: Promise<Uint8Array>;
    asset: IAsset;
    getMetadata: () => Promise<Uint8Array>;
    genesis: string | undefined;
};
declare const _allDescriptors: Ahp;
export default _allDescriptors;
export type AhpApis = ApisFromDef<IRuntimeCalls>;
export type AhpQueries = QueryFromPalletsDef<PalletsTypedef>;
export type AhpCalls = TxFromPalletsDef<PalletsTypedef>;
export type AhpEvents = EventsFromPalletsDef<PalletsTypedef>;
export type AhpErrors = ErrorsFromPalletsDef<PalletsTypedef>;
export type AhpConstants = ConstFromPalletsDef<PalletsTypedef>;
export type AhpViewFns = ViewFnsFromPalletsDef<PalletsTypedef>;
export type AhpCallData = Anonymize<I4or8ectd3dmig> & {
    value: {
        type: string;
    };
};
export type AhpWhitelistEntry = PalletKey | ApiKey<IRuntimeCalls> | `query.${NestedKey<PalletsTypedef['__storage']>}` | `tx.${NestedKey<PalletsTypedef['__tx']>}` | `event.${NestedKey<PalletsTypedef['__event']>}` | `error.${NestedKey<PalletsTypedef['__error']>}` | `const.${NestedKey<PalletsTypedef['__const']>}` | `view.${NestedKey<PalletsTypedef['__view']>}`;
type PalletKey = `*.${keyof (IStorage & ICalls & IEvent & IError & IConstants & IRuntimeCalls & IViewFns)}`;
type NestedKey<D extends Record<string, Record<string, any>>> = "*" | {
    [P in keyof D & string]: `${P}.*` | {
        [N in keyof D[P] & string]: `${P}.${N}`;
    }[keyof D[P] & string];
}[keyof D & string];
type ApiKey<D extends Record<string, Record<string, any>>> = "api.*" | {
    [P in keyof D & string]: `api.${P}.*` | {
        [N in keyof D[P] & string]: `api.${P}.${N}`;
    }[keyof D[P] & string];
}[keyof D & string];
