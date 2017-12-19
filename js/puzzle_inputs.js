// Expecting a string
var day1_input = "61697637962276641366442297247367117738114719863473648131982449728688116728695866572989524473392982963976411147683588415878214189996163533584547175794158118148724298832798898333399786561459152644144669959887341481968319172987357989785791366732849932788343772112176614723858474959919713855398876956427631354172668133549845585632211935573662181331613137869866693259374322169811683635325321597242889358147123358117774914653787371368574784376721652181792371635288376729784967526824915192526744935187989571347746222113625577963476141923187534658445615596987614385911513939292257263723518774888174635963254624769684533531443745729344341973746469326838186248448483587477563285867499956446218775232374383433921835993136463383628861115573142854358943291148766299653633195582135934544964657663198387794442443531964615169655243652696782443394639169687847463721585527947839992182415393199964893658322757634675274422993237955354185194868638454891442893935694454324235968155913963282642649968153284626154111478389914316765783434365458352785868895582488312334931317935669453447478936938533669921165437373741448378477391812779971528975478298688754939216421429251727555596481943322266289527996672856387648674166997731342558986575258793261986817177487197512282162964167151259485744835854547513341322647732662443512251886771887651614177679229984271191292374755915457372775856178539965131319568278252326242615151412772254257847413799811417287481321745372879513766235745347872632946776538173667371228977212143996391617974367923439923774388523845589769341351167311398787797583543434725374343611724379399566197432154146881344528319826434554239373666962546271299717743591225567564655511353255197516515213963862383762258959957474789718564758843367325794589886852413314713698911855183778978722558742329429867239261464773646389484318446574375323674136638452173815176732385468675215264736786242866295648997365412637499692817747937982628518926381939279935993712418938567488289246779458432179335139731952167527521377546376518126276"; 

// Must use backticks for multi-line string
var day2_input = `3751 3769  2769  2039  2794  240 3579  1228  4291  220 324 3960  211 1346  237 1586
  550 589 538 110 167 567 99  203 524 288 500 111 118 185 505 74
  2127  1904  199 221 1201  250 1119  377 1633  1801  2011  1794  394 238 206 680
  435 1703  1385  1461  213 1211  192 1553  1580  197 571 195 326 1491  869 1282
  109 104 3033  120 652 2752  1822  2518  1289  1053  1397  951 3015  3016  125 1782
  2025  1920  1891  99  1057  1909  2237  106 97  920 603 1841  2150  1980  1970  88
  1870  170 167 176 306 1909  1825  1709  168 1400  359 817 1678  1718  1594  1552
  98  81  216 677 572 295 38  574 403 74  91  534 662 588 511 51
  453 1153  666 695 63  69  68  58  524 1088  75  1117  1192  1232  1046  443
  3893  441 1825  3730  3660  115 4503  4105  3495  4092  48  3852  132 156 150 4229
  867 44  571 40  884 922 418 328 901 845 42  860 932 53  432 569
  905 717 162 4536  4219  179 990 374 4409  4821  393 4181  4054  4958  186 193
  2610  2936  218 2552  3281  761 204 3433  3699  2727  3065  3624  193 926 1866  236
  2602  216 495 3733  183 4688  2893  4042  3066  3810  189 4392  3900  4321  2814  159
  166 136 80  185 135 78  177 123 82  150 121 145 115 63  68  24
  214 221 265 766 959 1038  226 1188  1122  117 458 1105  1285  1017  274 281`.replace(/\n\s*/g,"\n");

var day3_input = 325489;

var day4_input = `pphsv ojtou brvhsj cer ntfhlra udeh ccgtyzc zoyzmh jum lugbnk
  vxjnf fzqitnj uyfck blnl impo kxoow nngd worcm bdesehw
  caibh nfuk kfnu llfdbz uxjty yxjut jcea
  qiho qif eupwww avyglnj nxzotsu hio lws
  xjty usocjsh pivk qnknunc yjcgh bwya djw zpyr
  ycfmfe mgq sjiomg nfzjul bjwkmgu yvsnvgj dcjupu wzz blmn
  rdowgbt vpwfdoi blzl laghnk gsa vhnpo cztxzlb rtz hvwonhb eciju pfjtbo
  bqs bqs dbutvgf mmzb izpyud rap izpyud xlzeb mnj hjncs
  xpu vwp nujcos piu irindir tpmfd umtvlm gznu
  sfpuxar qcnbte omouazv cnh uaxspfr sepolf rusafpx
  xbmaf iceyqqq sabpt gliexel muubepe qqiyqce fmrcc eazk obkeonl fmccr kgk
  apg gbycwe gap pag
  gagv saqbk lwtllc wnhzz khxsjc
  lgc alen rlmsp anel gcbvg
  bujlaz rks rlqf deknmee yrp
  scqvl weusbc bgvaz vgg cjwsfno vqy zbq aqy tvf bgzav
  hbki vei fxdwljs myjuba elbsib pvy xxjxgi dtgv
  linzaeu qbwdke fdg pykw
  qvtdd aco aav bpu mvkcuc kjfj japgfki jfdl gem hog bdzsiea
  wpbigkb lzhwba jssjkn qvb kmwu qddv
  iny osyvqnt tumunzb torq bdeneg wywank poza ipp iggorw
  tuko mhdbsf vmjdop jomaqpj rcdsud hmgspr lsas nzmwc
  cirkjq nmjuu xtgejv gtexvj vjcmtqq unjmu
  xsdmezq xvqjvqp exhygy qahju hvd qadmdh lok
  wvvys kax rohrrar rwhnvi lhnmefp lsktouy bxilosp
  wayf diobnl zvu obnidl oibnld
  cewil ygsf ffzp ruxhu vah lnvwt aef lnnjc kgkb gxtlx feko
  uti epphrin pywths cpzzh csjei nczhamy gayxmb bdcytq xkx fgmt
  qvzyuwi dwo swkw bwjdrn dasgd ijgw vzabaop yefyhmc wgij
  dyg sugrf vid etz weyqg nyntx dwfgwm khon hnzzzn xfyra
  ofbh bdrsk rdrjj elaxvk jrjdr
  msxau rsocvx zxdda mxz lknl
  qktaywx dirpdbf unqnd wbrwkuu fvmqwl emxr big
  xwz kvsydc ayokjyy qiah omw neo htltxx fxhwqwj colqvbb sxmo ephfkex
  ncjxoaf fwjkc czmhv ylg axcjofn dvj bzqjku opvcr jiwzucg vmhzc
  gmmnrt zqar twdwrg qiwwki fcbr lixm hjdwwe moiva
  roinlxg cxeezve whannk cxeezve pyoj boweioy cpkgxsz
  qkct qso xlb xyy aellfet rzt cbboow devfb nih fhbfxzi
  qyc ltxia alixt atilx xtgrv
  svruz ufvo rvesnxv dik vzurs jjg idk
  xeudhrg hudn cilo ljplosb
  kpb oyzvywx vldko qhfkwod bkeutk zqcqug pbriu wqocos
  qkngzfy whobyri aze jvipdty ocirbep icqwc
  kzxxlab sjr zhymws xkbx
  nnxs gkwtld dwhkry snuibq dtdl aicug bhtlfzp qzk jctos
  regvro mxcq hqof yraucxi jhkol iuxineo pbtnk rfjwc szgjpr ndqqj vfgm
  yqrfox xoqrfy utbryu utubyr
  jdubjt wqrl wnk rlqw nwiq pnbn qinw uaff ftdo htfrav
  rum mur umr tij ovbahl losao imawwpb wadhww tbteyqc
  napxd kzeiqcp ppgqucm xkityt frq hugrp gjgtt gmuqppc zwqme
  xyuzs ysch howlzgu dkqppbs nvbiz mks mtxv vivouex uvawq
  ffe lfsn nlq mpulheq ikcfo wdtz cnwsbph zkib muu
  bqkxav wtecb lxwdhr kqbavx aqxvbk
  czwswqx ldkxapd pfwd bdkkj iqohla cwosw ihqpd pcc ckhabbn
  foiip hau rbqiyhh htm omeubgh symh evfcqg
  lqx xlq rsgf izu esetis
  npsrkdj fvulgkw eovw mzr uobcze azb tij ihoer ehori jit wknsqhm
  gnrksh xwggt oosi bpnmhx qqaa mpmryu jhzyz
  yad gbexqcr gbexqcr gbexqcr
  ldca xxhznn twyy ytwy zhxnnx xfmpi
  floioot kfyh dhibv ezyznar sfg sfg ezyznar
  cinioim iiocmin ypla aypl
  mhwcjbz dftuqsy wswop eizbf ptsd
  ehx mlh nfxgfkz uuw xftmn ptlkbo vsnyo ttwce
  oexvf orcg cncnkfk comvhl
  lqewsj lyulrcl efixd qvd fhznqnz yvrkwyi xmhgc vzbp
  dmr wrxqh thcm giomp rtvl ssc gwq rbklw hcmt fjvud
  teozhb dmzwfv qkq pvcqfqq
  hvlebc qqmg repxk zwrjdx ztruwb such tyligs ybg
  psa rqznokd lgc jstqres yiqt mbiody xazb xjuk dtb
  lea ncm rnh myzqzwm
  wjml eums ueflvbr cjpgnl qduunu zfxaai jwlm lprzzg vrn ttetyr sume
  uwkgeu uiahd plyewgi vveo nwhsitz mcitc uvk zsxehgs sewl
  lnbdrka sgtivn sozzq mgd vhxfnlr twrfpk
  gadphmk mbx lmlbrf tsnehnr lawdpm fnima gxgl
  umty vrn dpow fsnnpjv fsnvnjp nnsvpjf cioaio
  euu uue zeskmtk hob stekkzm
  ypqpri qwdju ypriqp iprqyp jnoxqa
  lkppi ingfxw wlulvp yhwrli nxwigf oyuhq ggfslx
  kdd ypvr pyvr waw vyrp khqq mamxca bapq gobfm
  iuq upvdpv zxef bfwns lmq lxswr kpsqo pwde iaaou nsw udy
  lgzo nil ovgrmt omgtrv jrqp pqrj lit
  uumyu iiakfj gvdtzz qbux yxn ejs dvlts
  hcm ghutxq zswi tmyhqef hgxtuq
  shkhkdk kad seubeax kdl mzu
  cpykgr skx rfhpor xsk moyhlai ogv ophfrr dxipuuh
  beyw jvrre opodn zdoajhx fhg ijs drczy drczy hjungq
  jrzieja gfg yzdn yxm wshibsn fgg
  xtylh vxscmvp rfymq uzhpyea spxcmvv dlni msj yxhlt
  eov awql miv miv eov
  mmvrfbg fjiyf hvqz zpuqmbf fszyuz ldfgni wemfjl fjjpl rbnpy rfb
  ppzpeh nam ntv xnchtyk hja hpepzp foj bibvx nmmdlff bsrkp
  qiy qiy umhlnh qiy
  tyds oepk wae tdsy sdty
  ukawr rkwau ghtjhm axy
  wtbjiv btjivw ewaf hwk ttq
  kdpun myve sqv rhvpy fnjwt puw ujhf thsp nkdadqr
  vyw wkkpdpy xlgz lmmcuve ncuq lmotk
  pmsfw vxd jpe qxlyasx ejp gwuv
  pmgyndm ezofbvx nicbwrw kwnlj yjvnas fdpkfo mqcsyhn pyjpf fbexvzo vkftm erl
  trmwvk rywuzoz hbidea kicohfz heidab deaibh
  sogf govd dknpk vxrvk rlm vwhjk
  xnxbfmw wguzrhd zbmkz piwppa mkbzz xvwrdgy flusfqb
  cgduq hbnwr xfx mrejb ckw zkbaihf cloow cwk wuvthv iwqctx
  vugx qbucd gxuv ocb cob
  ilmet fbelxxz qratdfn unoj hbc duv srmikz
  vnzuw zgpbqgf uzm thysyxd dinfh bgvr olungg ksd dsetwqz hpg
  omagsf zpr coa kknx bzithq pewp flvoz xiiq weojqr wpep
  aagj gcglqt gqcglt xbfx dhdx lbx
  pljq plxuscw ilh wfk lhi hli fouieyw
  hvnh zvm aqy dzitirm veq ctux
  lglhs aqibdii hjbn cfgc qrg pnbntcx owoks ebz
  jozngde lwne mbo omb fnyzvvj gndozje
  bbdgc igtdj uhahgp sqduko
  uuspedu fgnspm ewc slly jbs chl heanm abqijx kadvgxu
  akfsft skna kusjqr rkqujs
  erc vrljpu lruvjp lpvjur
  iors hcdr fsqtcj vop vmn dtqnz tov oscjlw cdrh ctfjsq lrnts
  fxp mczo sjlcxa mzoc jmsq hcxybow dmrr bcoxhyw
  aac ewraerq odmxpz aac aac
  zzio zebmxa szeej poordr gmi owwnnh xfx rzrab lfey jesze
  akc yyoj vqod drtne
  joxhvyf ymasnbr omouvq isxdrr
  qyi ayrkzu jsk vqvvno jkkuxi zufnnwu mrsszdf
  ocqi htfb tzjna cdt wkzhynm eergf
  yokzugl usyuqu qvotq uweqyow lygkzuo kpmqmb uglyzok
  glvshl imqv jrv xlpnsy gcg psj irtiamg wkl
  bjcpc nvyloa dkkan efj okubpc cxlowm eone kmpny
  cyxqys nmuaftv gqxj gtvsc
  beouh dioxiah kizdy hyi cozrray rave fqxmxmj gdm
  frjz amrsat lxvhzj azhevtu vxlzhj
  zwmnrk sbk txzrcsj sbk oosgfej cvh zuthibi onvwd sbk nhwpzq
  gzamt vraw kuk ugayl lyaug bww rwav ijah
  bdjirxg vifjr rhbxpa oao yrhjxoi pbn
  navb umesiys yhix phuhu aekkciu nlnsiq wjf idqdwp
  cmhw rsu urs ziprlfe
  kyhxitv cgty bnwjyq cygt sgjn pdab imarvhg yjbnqw
  axaa ejancv yau njpc jvwy bpft kwjvg qzrbvtm diu njpc bpft
  ambj upe rmqr yudbiqf krudp pqyf
  tnb mobnpv vep ohxoc cyip wxyccfo jrbi rwsws kls zlv oohxc
  fjh dmb hlbq bqc jhf kax suz fjjg rkpc
  wjnn byfirm goeyh xtjmdka
  tgyfxx hefpxln mveobqr yeo ftfn srt vim vlcu hevoi xtaaff
  imyql xotcl poql rlueapq bkwykm hlalk bkwykm
  gkec zff hbmtq rjxjbcf arerlu pvz cdaqi nijmhv uodwjh
  mpctof mopftc ksfbat sbkatf
  nvdd jub bvi kyggdbx nwtiok gjt mgsm dbhsn rzibgjm dvdn eqi
  ysd iirp dfgzza wiyeoou ysd ispkv bcqg wwzqgq xphse
  ntq ivposb gsd ezl tlkztp lez qyurp vxsmg dgs
  wijs rydbj onm usiyqzb hwrol giusanb kewukl yziuqbs doojam nom
  lfacyy xwwast truqtt tzneimn uxsydc ktu eqyaj ndszak
  ffleooc kikif fohgop aucy moubqxu
  iaxc pnwexdl ncy vmwm xrqoi wpgftq rofx utyzjuf stdxq twpgfq
  ppmlp etsvi cjdx poly ynx vfxpslg mqjo qnpsage flpsxvg jwsxiqt
  lbyhnb kflrpeq ssoti webxr embbjd kbnx ubzqco
  khhc vwuqzb ebocbko rwmonkz edfqn hzh qhncoq gbwdi wjeg ocwow
  ghzhd kcxblp lzwkkr gzhdh umk pblcxk
  wyajtw jiff ouylv sni lwhlrg avqjiis igzx wbl lhrwgl
  glhh kaxha tqii hwzx rgic kaxha rgyidmt qdgxfl ynjc oibfij
  bapj bix rjniw ynbql idlvnmt wynpzbl zlpuoix kvn kakwys
  aldpxxu iojxp rif xbyqtr jffdvy qnrq tqwsdiu
  ulssco ktbymjw bfj zhkg zgc ctyri
  ilrmq wfahcgk mrlqi bguad inj
  cjzc rekuy ifr wfkg sple
  cvjkp qbmumnp mprg ltmwxxh zpemtyb ozzssfd ksu mgrp
  nvc sxp mpkxz bhlctq hguaa yrdkm iwsgfg qjssh gobbies hucdh
  jdxrjw qmo qmo vobhnu
  dnjib wtjp rfdjqdj skpvrb vkwevb kxxovp
  fzi kicta zkuvr rfaawv ehklq cfdjsyb tukahwr zkuvr kicta ouq
  aba ytdguk gqmpn hvxabff hvxabff dckj
  fna wxyqhxd hvy khsu yypoyy lvvue medheua gim slf drdbeh ikihf
  jquz wwo wwo ghlz jrbvb jrbvb
  jwzvkl yjw ouwla yjw ouwla
  zsvlgyf rzqbtj qygynem ukdgjm lbsyh tmdzp fbcaim eymzr
  pvw sbs dvsa plmepl pwv ayxk vpw dwt
  inayadn pnti yzhxk azga gxq aznbciu gjnmyqm
  isgf ndqmk beyqq ebyqq srtzxo aiiw oqfuwp uoqwfp buejctv pxbk
  pzl irv tzvzdb wcy eszm ybwiw ycw riizifd iybww
  btpu cua azzqffy owcr
  ofwq sqlpzat lozdxlc aevjmpc lcolzxd wbbysn qwfo vcrx gdzgi
  dbpfmxu ydsxwl ijn svxtop csep ldqeog ffye zcrl soh aclw
  wyiyyhv vyhiywy obgi hiyywvy
  ddvaoc lhv spurn rgxyy onjw illvn yryxg xyyrg
  vid wdttqq kajr myip
  wolqlue phlunpt dcmmkfm sgxk dmmckmf sfng jlbsntq dxp
  zmneyho fswj xdgsjc oefwjdi htgxvbd tgqrq xodoa
  ynw bygqdnh hhmnkuw cojqrke qszzdjo orskwq mdfae asabn
  vvpm vkj pcxghao caoxphg axhblxb vvmp
  txox nzy eqn zgir dytsi girz ffa ugjjbzj brob fll
  kbz pukqbd fiwmuh umwihf bkz dvz
  vgs vejs vejs vejs mbkyjjy
  viqmnmu bitkyw nddnk dknnd cldnpp hipub plcdpn fdzzpb mmyomn
  ndylnfx gozlrx ngptk rnpteb wtacx xmtcjy xldha
  fey doyxis ampmtr ycqh syw cqhlj hnngx
  dijf nac tvkq ayo akbj lzmngdm wfxpn bpyvrf cvdqpa
  zsofz lhho hgat wqskga mnt
  mylwm zxsd omzpa waz hcrr lxmpq jsw sqtwak pzoma
  rwhgsgt ysdq ztihici mpwcawv alkqg wsxiwx
  snldn bcb anjdv cbb awsscc cqxult hjmjew mcycb fdpdg sesrh
  kukrqm fawafz qdim wyobtqx bnvjnqg dcvqxta yptr nnpu ughldqp duo zafwaf
  knb yjqb bscpnt nzg sqeu zkahna ttuf nsbtpc ixwit vucwj idix
  bfqyx xlnpc ijrxu zkqi kjxtahr fgag orusms adi bfqyx bfqyx
  dqddc ncbv bvfk hefikb dqddc hqjl otpx zfiu
  ntkv qunrzx eztzure ctt rjo bkdt znvd jwdf gqhf mmhrzgt
  zeavm hkbf rawqwuf pis dojlkt vnjhmi uvk cufmn qginezd xyut
  hnidzk chlctc yst pepd dxntbxg vqk daxfpmu wshyddl
  jgd vesqgo bdyqy igl ahstdm wjtd lrtkjsv tjsj sccxbih esn gkkzj
  iisiswh jll rhlaf jqwwgfa wmhyo izva vrg zjkak nlxxfer rvhx
  mkrkd jlqtpy ukstro ktuors wsj ynqpbp kpiyxzv nxeiwg xpzvkiy
  jbr gnct fwklekg cmfqnm ctn gqobrs kwht
  pztmjs yiffc kfhsblx yiffc yiffc
  biezil iiezbl bzeiil smocoju
  viiigm gmmmk yeiv dxzogro qsmzsur hukzwjn lcle syo mdj uruf rxfseu
  extchsd adeff ouikoj fyaclr rwwvqsd dooe tcxheds zrdqqhm fdoxv kbxi tlcj
  aycnydq qlxhka zoi shplo qll
  bfry lbwckm ltq rbfy gpn vojp ruj dpxcve geq
  svtvfwh lca lac qia vhwsftv nookdfz xgjiaf yvcdlt
  aspgqym fryuzhx bbydf tbn bwutsc fqgi zij lmxhog qnmse
  rbb gsys volnas onvlas lonasv vwjdso lnteapy
  got iauk kficn jvfuy yvoe jcxwui hyamqx mke mwh jcxwui hyamqx
  avutfi ggmha dkopc kothnnb syoi xsd wjedywy
  oziejyz yzeijoz hnthyn knj juuq qujtp kgq bymlnlf yicf
  zsejuy dybeap hvowmvn okxb yoi epadby cnzjk xfwprzc
  lacg iiix fblhxvf nrkkol lnafzw qspzsn gvdy ipj zub uouseo
  evukwkh ycjxxc lptwmf pmd izxdsos zrkavf pgjoy zwokg mpjiej
  vqw ijwoy eaw wvq svmcq ccxi nyub ynlq eqornax uprt pygfe
  plue okbbm btvm gba kutn jacjx ysqt lvx pcxxu qcf
  pyw ffjfudq bvk hsdwdva fjnivhf odbmw krpgrj
  hziesm bxa dceiwt tmvivjk snl fkh dahsxyx kqlhak lurtk
  xss sswyxrg yqff dbkx kbxd mpzbmnl bzplnmm
  uvz pjm ilrol pmj uzct ztcu brhkv
  heiz jcn syjt zfvlvaq aflvqvz amcjh rxnitw
  cxl nxvrn vjnz aewtr cxtko nnvcp ltptd adpxt zvjn fntklj
  aymmm tuirj hzngq zhbh paqs kvpfo aqsp kmo acprw sabrso kdqmp
  ndqjspv mmhp pndjsvq rti usm
  ije oad mvelyg jadz ekm dao zdcmv
  qwww tmwmdbb oxxfoza rgmf eonku brh gcgiuoi ojscn
  fjedeek ohlax fiydku rbnxpg wfivg cdgs
  axwbni hojye mwfe oyqknxp whdgfy ihku mbhr gagnz hehagxj
  hibautd blnayq lnayqb gepml mgpel qunw
  ircx oeb kujtip zbu ebo cmmn
  upyqvot wbponp hnn vav avv tvrky omm
  yzqsnf agbfsw dbxoya sfnqzy hqrxek qsnyzf oagyerm xxhukm
  xzvk mvcwz oujr hell hoe xexa dqlpqt xdqz ucola hsvv tcmybhl
  skldxr mzyol ybzyzd jnnxb rxncdy nkpwy fwlnsw omylz oiwieu fshv ngvha
  jkwqf yxrox hejfoq orxyx
  rijken xiwf mawqcfu erinjk jsi yyg mmu mdkfqb
  ornjes krp eornjs enjros pyqp nnwwjl
  wzd uqqo kyeli tikdle aykdjog uiz rbpnw mjxezf ihiz rlgyg
  cjm ajqgvkz kfgyy dmczlc mjc kxcm zctyqgh ymsk jwhqfd czpqgan
  vxkzvco owo qogj uyictoj kfr pyoo ejrru npluynx bvv jhhzu kuciwc
  eqk pcsly kelu arzgoe trfo fotr cuaax
  lagonw qvcssqz sdoklh uvovi sfrkmd hnvafj ltg wfjj
  viwbkm hpwe kzzwrbr axjtlq mznin wwpjg unlwur
  nuzorgo qfoz ydisca qxdfutv hzg
  nqgge tobtt hjocx ntyqyi rxzkynw wrnxzyk ciscy trjt ottbt
  yuii srawx gljxe eteogz kcu jlgxe tjik ktsnp agudqok jwol vfnyv
  vgicg dhnrmxz sjhozy hlalx rutwq
  nyoyoje kco hoyam hoyam tta iflud amh gdxcsj vqr fvsqcgv
  xdmbtph ueen cskerl rxjvpdc
  nricn addljzg obq rikez igq bxygkmv qmgojou uheubk qor
  snzd ztusvr vrstzu mceddga hgu
  vvrbfjg mcdhmsf ldtwl otuna gmjurrx jgrurxm rxmurjg yrioq
  iotkvo sftfvn vvoit lllju xvlg rdsb ywmdf mzxigu kzq
  sgqw gqsw lqfu wgqs xpiwou jurgucd azq wgaqpm
  ijntzi chlnfj yjqatz hjflcn vys ofq oqf oadthe jrfw
  mmc motjo vcwmod rpaszfk zgkkua bpja vjb htrk
  bpfvvka kmger mnvvfl hakudy yfprdoo mvnlfv rgmek evnwg
  mykpu juavkn cecdvi aszbi lxm hmps oaqoif
  fshizd fsdzhi lvcq hhpb eavwno auqlwz rpv owcdojx amsmf qgnddd
  pohmcn hlcxk qsesxh rncr
  fgyrsis ldem avxmnh frpodq oefzn
  plfpu qdyojz xdrzrjy kpv abkh fge bbnotvp liikmcu czvwl oyh
  ovha muitw pzy edfjoo fhsxuh dliyruc dikcd cqem ywfy
  exyry jtzqn tscr qbtxno cikk poqgr tnjzq eofe sxea anlikep kick
  zcie purpw dmhhms bcdo prwup uprpw wfejgjd
  kwtjc cmixp dodfwj hcgmmat pkeyspo ubnl ajxvj ffkh xvw
  nvlgq oduus psufiqg lrwpn dleftn xtllqvf usgz
  liarf sczsf sczsf wky qtzq qvve qvve
  cit vtjsh jrhkyvi txj urmq hppx
  rhblmxn rhblmxn lkgow dylurwc beyk gfcewxj ehpl disoe tjbjy lkgow
  nbkrm jvk ffux ars agns bebic jzjfm kmnbr gptvtsa ufxf
  hrlvup jaz tafyr qcgq wkd fiz bgsrx jmtcvo qkbvj
  eontk djf tiafrng mtwat puainel nyjoh meynxbf eqdw
  aspvmbx tgzuszm fpj xkl nzpr fjp vnomk byx sbtov tnu utn
  ldyww gwmiddv hwyh gcgsdit gtgdisc suufl xsw dlwyw
  sye dgbd wyf ixqzthx dgdb esy
  nsdgera fqz xwbdgui ngdgbcd bcn qrdxml cwcmxws tncm mqsodj cqgk
  estayas cocmbpv cdcf vygtswo aplwa estayas
  ndc ndc wntr sfls sfls
  gse svv esmi lcdii lnr kemrk gnk ildic blnqy wvn
  mwlpm awkr sxsudub yauwww hnktbog fpnqc nmxoq yoparu tqjpkug nbipft
  czwnkk hrodtmx yyzpil ooqjb cvxzfh
  kwa wak gipak gsgrw
  jyy fja jjk kuvoqdy urqx
  doyu chgn gvtxi qjdigvy kxr dizwrjc sll zenl yyblj
  epxeqih kfi hlog pakk kkiidrh hiufw wuhif baqzxzi bgcd phi jzjdxjp
  hllhyad sodc nyrtfe kygof hyyqi txddqg wcwxvnt ewqmj wwv
  vxymuoe caat diqwbo vfruxdf sqniefn hetcbl nvtttu ouesb
  yvoez pvthzc tdowuci wjijicn fhpmq kfobag yctdwj
  xaugkb rprkg tidpx pjk tpwwm pbcfhr wmwpt sfynrl iouaw zbnyu
  auakc culuxg bffg rodyhea ixlmtfb jdurl szoa
  xgona fjzho buh khbvti ddh mgj ptgaqps
  dqldupd udpldqd poku gfgpcg zsvk grvk kntx jih uwvxdvq sivk
  mwdnq wmqdn uzto mdqnw
  alvfm qxqo thwru xqqo jilnsgs rnonk fwntuby ogbha
  gvxlxyf cdpv khvpka kgt gshlaa tenb
  mtgvvxh mrjrsd truk rrerzx tujweaz
  ozepw gsqkr rtmmc cmrtm
  spnthg xhlzuu xwcrxz aqqejhh bpzh
  ectdftk rgp mkp vxp pevriz wkgfkaw vfygj peg gep wjn
  bksbu ywsszf tsbrps vxicr hfustju ynnlbo
  sio urbvf ujezjk vkyc ukjezj bvrfu qwwgqmw uqfekvx bzipxus qfumwh
  druru kycweog ycmef rjyy fkgp
  rmf ifbip rsztco coju wlr bfbmsug lwr bsufbgm nwmp
  jjuxtyd yif rkldsvu binq spepa mfg aszm
  ghilaau ncm sgbavz omzeotz azukf bgjw zqzo gjbw pld
  gtog iqheik budeu guvljmi
  qqlj jqql ttk xcxu
  cfq cfq kpagib dxfxufw hhksbjh gpcp
  xkeax acnia jjubfc mhot uxlhh gnkj pavta rciondm rkquh xudqian
  wqhqzg psqh rnnc uujlgq
  hpjpaoa maa rdndl xewqj nmagwx xewqj hxuyvou xziv rdndl fbxmbz hmfwghy
  dtwnrca hbfcptw qrmvat sdatx les zwizogq
  bodiwzg sgoas fsf wgkrn zgbdowi wfkz
  ngcsg grtao wcfxpyl gngcs fxwycpl fkpt
  txvngo vxngot tkoap zqjc qzcj oeruix myh ihgdfik qtt
  rxeh fcbnoo rxeh lve wvoc pmnxej dlcbrh rztt noibg
  zyvq lwxqu oyjv bvidmf wxuql
  wzc zcw czw dnhkvrg nzslrf
  cfgl uwhxu qnsfmt tgyabes mqnq nkitq hmcvxlt qqmn yzmb uomqp
  lwziur hgmdmv zuvipkp vir apr gfaq zeo dunat mqgafzg
  prq pqkr xlrw njf ncqni kgpoma cmtklv
  jwfuc poz opz fuple
  fgleub lcgnifu lkwo kftbc onvwvdx lukpod xgmh rnj
  rwqvv ezjmoni llq ekd cdvv kzcci gzsj vuipv fnw
  rtnua gbnzg kqtogns iozzwc kjpzz kiiurey yzlvzx cpy xrue
  fexcjmw ebwssx ewbcgwd uwolou nfdhic vupiykn jss djoo xftbkgo
  idf ipvmez qyevwd wfsjxja dif dig
  szpbtsa bssaztp sptzasb qppgz odur cpmn wpmg
  pxn zjmq rbnr azwstzm mln upaqyty nxp oge nlm
  bfaryqv hag phtvh ypi
  epeeog lip zqio wuehlnb bau sbd dsb
  xbrrp sej agrqnpa aarpnqg bnwyi jbn
  uqmsvd asmuyy czxviw pznnmvc
  sddwmek wnaea iwphupk sabo
  cingdks ksh mtyip zltgafm dflkcd wbdnqup uokm gmxpyd libz svv akce
  qge ewv dkabkmb xcpi nrkmsu mkmb djvamg mhhrwjh
  krjt etfhm bxzatw zdkvz ehov seyxbw mkiirs plzoplu sogmwb wodfcle
  qwea adibdp emo homrd pjcrhlc eqaw kqsrp rphjlcc
  gajzo nwjg qxjra jztcnir ijvjwez avxb afz zyywqz kcszgh elmlkfh
  lbz ozia bctf bumoji anhil rta xvit
  ejybire ypjl qevak fzalx mlh qxlei zib
  xmzas kwojjz ntrnrw nbmxlv mdgxs xjhxg suo zdcrxl qkujisz pxmu
  eezyd unrtm wyu vhufvto rpb isfcy ygh hgy
  nszvbzv ebtt memrsva ebtt qwcaq bhbas pvzfbov ppjbdy nszvbzv jabvrp
  rlo zbmi lugvu yeby
  tfcd tvl faaq mnural nyarh xnxk ctdf bodz
  vwdrhc gub bgu fpcovx rcvwhd jukwsue
  aekrhi lpknnrh bett tkib ioqrap igwnst aekrhi lhha
  acg mknhazp pcgjuk tajplv
  masq fyjkn agq qhxbbl qga npzj fme xtihic rntisg iqv aqg
  ipagh fjth mswztpi iexd cocojy vhqrla joe wrsrmw
  njztu tsh auqrxca zpp
  jctn webxi haq irrr qox irrr webxi
  reaw axmnvd voakf lnz ftbxfh zjyxzl pryfjpv sistgb pov mshs
  gsy ctsngl ptmnyx vpjx zpvtori pfu ioycdrq
  aobdtlj osdnrth sgqe geqs qegs
  oamrlxk ygbb rkamoxl nztl sarbmtj yqupjt plu sbtarmj vpa rxea
  yvhgp yznko epwpza gqrsod rilukp cglhomj wnaplu ugvdko qdr
  cggztg ajw gggzct ubmiefj kpa
  rel lvasbh kobm mdnzla pwnyj ehep gzx nhjdnsg rxa
  qaz gook rplqwh vsht
  dhe aneq ivrn awekad ckcbt zsqca ehd rvni oulwfuu
  oxgzzow wntz tkqaoi oxgzzow lwkdpgy lhd aekjasp tkqaoi dnhaw
  alxghco cpanoa onjh hyeyebe whxn zfu zozbll gojn
  zdqulsa dlqsazu zqudals sfedw
  rydtrsv rrtvysd fvyza drdgh lsfzt blnxr cnxe tslzf iijyds ylcxn
  cczea nxx kwol kopaza wuvr cyvoo whlicv
  zbmrwdq tlzbevx jwzpsc uvkwpd bmss rbzblj
  jogx jgi gji hypmtkg ijg oscjv
  flkoqja kwmrqv wzehel fvmcfap mkwqvr ivwxg jqfwdvo hweezl
  vgjg nzucho nuohcz ggvj tmxci
  fqaqx zeybhtg bxeic lftuqp wzuerz sww qfltxk
  keiy myrvp blkxcg lncqmsu diittlg fqrf digrel cpwrk ipan dkxb bymlzo
  owm irygdz pyhj mow wmo
  noul pbvvt zcv ueqyjl zhetlw lpjfhli
  felvwb wdykz kyibdz haq qkouj vuav oztyqh
  dyxo njcr hcuk ysrr pucw qbajztc
  ooyaz pmt hqwu gjx tmp tpm pwz
  lyhzajz dfot avyifo kdwka pwypcep kyyw tirlku zdpjmft
  aexle hfxo dacwvcy xsiotyg cifq ibupshj aktt rzvf pgafj
  pxubhw ibpm jxtxg iwnssf osbpj
  exmtfyx blbfg emrunru zkuhoi lfzn zrj unmcece phuppi
  icomb rmy mvsqqkh zwjubz lumq wekx
  cmdgs gsr pfhqx pfhqx cmdgs pga
  rpyf jejc adaiou dutv imbenyu dqw zhebjhu pryf vtxs yprf
  cxj roprjn rqoh qacagru snxd
  rczvi hfpl luc yowgj nvavlhw vjudkmv dwu teq
  klwc cktzh ksnvswl nsgeu xyohp mhs fxnjhm fwrcg rdeadkx cim
  ounvb vzqje ujctzzk iyy vxck ebtvbqr uswsmcr jveqz qejzv jmi pboq
  lwffygh mqsh vnnj ufz qhms gqfuxo lurzmu
  buf psdluck gapwoo wgll sbfavbc lljfvzx cdgo rpt sfvabcb
  svefr kubbri fervs nboi zkvq
  jwr vtc zkcpzb kczbzp cdned pzbzkc wigjuak fszgweu odflfek
  vwdqm khnnj plokjg vnce venc vecn yzxtgb
  tawl yrhoz tawl yrhoz
  vvehsl kdhzgme rix rcs btm pxnlsps vlhesv sxpnslp yqjtool
  eqpyw kpmkcyw wqhglxg ajfzo hbd qvmhy nhokah iisqvad kxuyd fxek
  jsz txhwhah hxt djnvl srylveu pxp dzmmn epek tzs
  joyzql jqczueb rtdyw fyc fjirfyn tjcalz joyzql fyc
  pjrmiz xwnmwns kcqjuut zfgxhdr octwn kqppg zhfgxrd wmwnnxs
  ema yqxqs aljjo ajloj wozb
  urgmhiz epqj vhhaxdm ptlsvig qzbmm cumbho lkg gyzmg eaopyzf ncfy mqe
  ijvwvo oszkees ugvyk hjdj ftip itfp
  ylfw qutzdj mgqp cyjss yzsdqqi iykvs fyor sthyqp mrjtzee hgo zwqbtgk
  bkfkns gco bykzc mje dwmkrwt ljegqor yxjxp oaleuu
  xeltq ggyqis aud frtyxhx iwz wiz fwoxz fozxw
  zdu nwduqsa nced iphaaxo
  bqjj oah ezd brhgxrc pmkz kdog exw
  ihatt hck iepn egemprp wrz wzcuo xjzeaa wku ivjvihh
  cwkuof bmj qmxd qbtms zgdei bsqmt ssndhw eeenku lcsqy bvvodr
  tek zsgytci vgoun kwwu
  jcxvp ijxc buqgix uil zfoku
  ggndshq bmjeo yqaxtik blspz yofh edaroy
  ipvtxh ouye elln dllvx iqza nhwf zyfw pvlky
  iydcx gvarm gvarm wegmiy
  sfjd liiflle mulboe qywzs tzbns trojl pad mnfcrhb sltb
  gthqj jvpsof jwlfyeg jwhlfj
  qckv umzrge gnzc mnr xde
  gvgxmhv txnait taxint ius iboqdj
  vsfex kbpvsby qembkb efxvs vhflzvm eaazg dyg bbmekq
  wxpfk xwfpk xwkpf cjsyi
  knzg eefq feqe seppop ttxz qnqfn atgsy cch mkjlbwt uyhct
  quzw jbiw miqehe qvf jyipqh kzcjxyh
  teuvzf tdtwoi pcuafa cwgjk ccur lgmqv jpjdkk efrnw uloqn dpkjkj lwloeph
  yaffjy xntstsv gygq sxttvsn tvnstxs
  cvbmdf pfrfkna wupv van iocb hsiyke obspj ytyfkl hbsqtij hkcw
  oeddmnu koso mdodeun ybe mhjbmwy ubejz soko yxvuv
  nylhy ylnyh olb vcdik
  gsp ilba llnu jjk urbvuma qzypf bkceotg ezxq hyvjngf
  tfnegyq rue waeif tfnegyq mvqm
  wvgnsk cpd oib wrdfaz kohwgkc kzzig hogkwck gkizz
  fecuuyp yfq bvanvxb cjeqwf unw dccr qzh zqu voakj
  utoazh bjuq kmhcre izmny mirorsy twnl jyoc
  fnnpd dmr ccgu eqgewc zuqivf
  kkxiba qdabuen oikaz dnuywmm
  aogud adugo uzcglpj lucv dgoua mdsqa mvrg
  lymhv sof hvyml mlvhy nit
  chu bwxp xpbw ghaix seklnc ola zofnrwt uch
  wtt abob vblijtd oabb qjws
  uozrpw kgf gxidxm uehdr fta pqakkrq atf fat woaolk
  gaee voshd ghlyy emvzlkg cmcgk tuwlsj jwtsul znrta mjieqph glker
  qiugxas gkg cbzmoz kahs obzzcm
  puz omcokz gjc heuqb
  dgndhb wid wdi scwnrjf juaisgo eivaw hgdndb
  mgcrd hnqg pkpeb vprxcp
  atlcnzp fyp cpkivxi bzj ypf cqpt bysu
  pnd jiitmzs csw mxnpck vxutdrs ivipzy cws xiegsy qut
  txlk avcvbuu hnq yyriq ajyswd urgiwc
  qgiqut gvblizs giqnfrk tty mvoj wpikl giqnfrk bkdpndu xztmxn hsmqxf
  llthg zjslki wilj rcyfois bavz hrqxn
  ytbw hlkl vip skycogy ejiirhx
  ndmtg bthlbw lsoq cvlvo sqol sqlo bppl sdkbls dtpyzrq vgm
  psm xpj xjp lqi spm gqirw aglpj
  htg fcchvyt xffev szdu lieadft
  nbjo qohgzu vofg vvild dbtyi pdolxn plnoao jxze xlpbxj brajzg
  urpp jjv lihmvp ivkwdqr sesyp ypbry qok sesyp ivkwdqr was
  yinepzv qvnzdtf apv ucxo bdioo juga hjfsyl hmowo avc
  dmiv tplae iiuiaxx tpale pyzkc
  giwhst mpexd byfyc swuzkc
  yydkwp xuu vjya kav ujmcxy qrtp zvlk
  lsvdyn tkw qxu omvlc wwmfvov mrgcoov dhpu tfair hupd zbx njzgwtw
  zuz rsxc xsrc gdwwf nycsv zzu kcu
  unlvzv jerqqgm nozma ykbflj qihqkx
  pctffo begf ivrvy ezru mvqt waocq
  tubtuk gxkc ikgw bjrird kxjebbh sbjyc yafkd khqajmt aclpmf gqfo yrpf
  rdt vrxa fyudo myeosb ursflwk
  wbjras edlbwdp ctobtw jbvtvcd xjgoo cmunxm mjtbpi klovx bypmsab unc
  xckml uztr htublq vilabvr jdiwus qejxur evfw qqm
  tzqq tzqq wkb wkb
  dgmg ljzc dgmg mbmco cgze qsap jccvot uors iiq
  rwvac woylk dmn teorprx nyuvz hcwwxlj lvej drbjo asjgq
  ljen tpfl vixcivr guaf lnje waim jlen
  djgaa janhi adudm yzv zkcb xqw fgvrz
  kpkjoon ggzx skp rqcsw xgzg zgxg jtf ghc
  rtnyxo qixfd nphekk mouzk gny fpzquw qgywx rpr gqydze
  gawdlv vrivoof rte iyp gaih sfzplm
  csojx wzojode uzy qulr lylmb guvtkwv
  ovxj aamms ftxo ebckdqw wqvsdci jwfqxks jafrcrn yyomrot
  qnu jqwr ywudxk qpsez rdc kiyfz iiecf dthxjjb bown
  typ zxcvjo rip acjhl paaab qhqipg xkguye sbxy pomkvn
  ofvaegv hgak oafevgv hkemar rqkha grklnsp msvkkku rekahm bxmjnw
  ahoihju sdyn phi uhz lupbx
  lavt jef klmq oqyfpf kis nazul ymezxek xpla fxyrfnt
  nwnagwy hvpjqfg sgm ungfstr gso owqqxjh
  hey hye ipyrt qxmthg jth wpbr hxgmtq cvfkfux qykdzhk movcfnl vxyoc
  zsras abnrj fgaczuk ssazr xzf cnxu gns wnqqy dwjh szars
  uhb zanlvh lvdotkb xekl kcofo
  lhx iccy ibkjw ciykxaj imsx ehamqlz iwzapxc rhaltv
  pofit owmpqej vwrobh jvox gdqehss yyxd styu tfkm fiotp
  ecz mdpoqsv mdpoqsv yxx rexok hcfll yvury hdhcfu juhkvpt rspnfj hxvgdir
  ohed mtigaoe eodh agmiteo
  vjvv hfco cppbxtw hawsjxz ovlsq qgs risgwhg auhj
  togivgg czrtvw ccz wzvtrc bse lsk
  ndc ndc lrfi iyleol nchx jxpv xdcsfmp nnx wtvq pih tgc
  hzpf sur zhfp klfmhx lbuidp xiqimnf
  qddpdk trfxpip pnsowj hidgvnf prur rsrautp aamykfm fysqjmq xwzjane mbmtxhf oqctt
  lfd eops govslp ultbye vrqai hcjkcf snpape
  cbok koumkad otpozb pqcs emilpe wpcyvxd bock
  spjb xkkak anuvk ejoklh nyerw bsjp zxuq vcwitnd xxtjmjg zfgq xkpf
  juo pmiyoh xxk myphio ogfyf dovlmwm moevao qqxidn`.replace(/\n\s*/g,"\n");

  var day5_input = [1, 1, 0, -1, -3, 0, -5, -1, 2, 0, -1, -3, -9, -5, -1, -9, 2, 2, -13, -7, -13, -18, 0, 0, -21, -10, -2, -12, -18, -4, -27, -24, -16, -10, -24, -12, -5, -31, -17, -10, -22, -16, -3, -10, -5, -37, -16, -4, -8, -1, -44, -12, -38, -42, -27, -9, -52, -13, -12, -36, -26, 2, -48, -2, -3, -17, 1, -51, -47, -68, -42, 0, -53, -47, -34, -17, -15, -10, -76, -53, -58, -24, -62, -78, -11, -5, -71, -52, -41, -84, -57, -63, -88, -11, -61, -55, -85, -61, -87, -57, -46, -94, -19, -31, -84, -60, -7, -31, -25, -90, -108, -79, -25, -41, -96, -88, -3, -67, -91, -28, -19, -103, -88, -70, -18, -64, -59, -49, -88, -110, -83, -68, -17, -61, -33, -88, -29, -56, -78, -20, -108, -45, -46, -51, -59, -1, -92, -40, -101, -131, -141, -59, -35, -26, -14, -22, -52, -108, -47, -70, 0, -125, -88, -15, -80, -71, -23, -125, -54, -100, -155, -105, -114, -151, -97, -9, -69, -88, -31, -165, -45, -146, -101, -155, -75, -60, -98, -90, -125, -19, -97, -166, -12, -55, -99, -86, -42, -111, -189, -134, -36, -3, -103, -10, -32, -135, -66, 1, -37, -170, -194, -60, -99, -211, -68, -73, -107, -102, 0, -11, -110, -202, -136, -222, -82, -137, -11, -121, -47, -49, -115, -7, -208, -102, -86, -176, -84, -107, -133, -17, -71, -103, -112, -184, -104, -22, -129, -223, -63, -11, -199, -142, -245, -157, -125, -160, -111, -209, -229, -88, -233, -137, -149, -204, -223, -93, -198, -123, -167, -250, -166, -234, -114, -1, -265, -144, -86, -65, -32, -131, 2, -156, -217, -199, -27, -134, -112, -12, -39, -17, -223, -117, -44, -102, -201, -21, -156, -8, -5, -266, -133, -63, -279, -296, -92, -154, -100, -10, -123, -293, -66, -142, -128, -28, -175, -166, -70, -203, -38, -61, -50, -10, -25, -89, -98, -233, -39, -295, -105, -29, -36, -98, -67, -92, -229, -173, -216, -78, -331, -319, -296, -112, -151, -212, -65, -124, -33, -310, -11, -22, -32, -227, -23, -2, -208, -165, -217, -22, -207, -203, -277, -49, -342, -23, -148, -191, -42, -348, -90, -161, -190, -93, -337, -329, -276, -285, -327, -134, -366, -132, -310, -93, -244, -306, -197, -77, -353, -80, -337, -369, -353, -2, -330, 0, -212, -167, -318, -61, -272, -369, -51, -294, -363, -92, -260, -146, 0, -351, -154, -194, -30, -74, -155, -226, -21, -316, -20, -326, -105, -311, -232, -223, -250, -35, -308, -14, -93, -17, -422, -354, -377, -283, -413, -19, -245, -152, -179, -173, -97, 0, -406, -176, -97, -402, -76, -236, -444, -233, -38, -33, -362, -190, -15, -267, -163, -240, -272, -449, -163, -415, -416, -1, -12, -103, -150, -238, -464, -461, -351, -64, -198, -318, -246, -157, -449, -401, -39, -382, -269, -389, -209, -241, -177, -156, -157, -141, -190, -470, -422, -447, -111, -463, -400, -334, -323, -188, -249, -380, -141, -120, -391, -311, -26, -460, -438, -18, -127, -133, -201, -429, -391, -99, 0, -335, -373, -367, -463, -224, -390, -299, -233, -411, -244, -5, -73, -377, -413, -172, -497, -120, -87, -262, -198, -112, -162, -446, -469, -111, -364, -284, -252, -212, -358, -507, -48, -74, -96, -518, -34, -290, -234, -472, -294, -5, -334, -355, -462, -334, -494, -549, -121, -482, -548, -14, -340, -410, -441, -559, -282, -384, -88, -453, -323, -465, -483, -2, -481, -333, -483, -176, -250, -167, -312, -550, -185, -365, -108, -17, -326, -488, -440, -122, -505, -465, -54, -241, -20, -397, -48, -44, -187, -548, -174, -461, -238, -581, -409, -582, -140, -191, -60, -147, -538, -5, -116, -62, -165, -334, 0, -578, -264, -396, -589, -354, -276, -283, -238, -616, -202, -59, -529, -346, -196, -247, -247, -622, -523, -65, -525, -563, -210, -211, -569, -340, -391, -211, -324, -515, -234, -241, -576, -478, -392, -307, -202, -648, -485, -460, -22, -42, -383, -440, -378, -340, -303, -167, -608, -92, -167, -217, -355, -126, -669, -576, -7, -568, -526, -577, -163, -566, -561, -217, -413, -275, -225, -472, -626, -667, -21, -179, -299, -204, -73, -172, -8, -373, -344, -551, -487, 0, -154, -658, -145, -428, -589, -116, -266, -174, -109, -148, -471, -120, -623, -455, -257, -486, -677, -51, -63, -531, -326, -180, -321, -460, -652, -542, -225, -574, -362, -195, -422, -200, -479, -302, -573, -652, -543, -77, -202, -96, -265, -717, -715, -587, -710, -135, -263, -61, -197, -426, -10, -675, -465, -58, -525, -432, -348, -378, -474, -22, -497, -438, -612, -67, -235, -255, -236, -566, -386, -604, -366, -16, -105, -713, -697, -138, -743, -405, -744, -168, -754, -627, -201, -38, -121, -252, -240, -756, -350, -678, -507, -780, -647, -136, -644, -404, -722, -680, -326, -421, -105, -792, -407, -672, -179, -250, -59, -761, -775, -103, -779, -682, -278, -689, -735, -738, -498, -28, -484, -36, -482, -310, -397, -437, -229, -744, -699, -470, -371, -115, -766, -147, -182, -646, -540, -40, -202, -322, -289, -828, -784, -121, -366, -220, -36, -646, -567, -301, -168, -26, -190, -138, -390, -130, -448, -242, -274, -65, -784, -319, -179, -332, -327, -698, -837, -691, -113, -251, -143, -755, -791, -725, -849, -194, -570, -449, -186, -354, -524, -54, -846, -516, -325, -515, -453, -703, -530, -1, -869, -401, -503, -641, -822, -694, -667, -537, -285, -711, -73, -746, -764, -737, -475, -476, -456, -845, -556, -737, -524, -869, -646, -898, -692, -97, -248, -32, -884, -486, -113, -348, -517, -417, -39, -726, -580, 0, -858, -370, -672, -726, -599, -475, -87, -336, -384, -619, 2, -235, -629, -774, -905, -727, -232, -389, -626, -240, -780, -392, -900, -911, -592, -625, -424, -274, -231, -327, -714, -729, -537, -526, -8, -468, -809, -566, -786, -798, -245, -958, -652, -610, -703, -207, -727, -930, -883, -959, -204, -976, -568, -121, -503, -910, -134, -619, -558, -340, -24, -16, -780, -797, -594, -441, -886, -420, -639, -979, -711, -745, -916, -152, -700, -116, -523, 0, -756, -194, -609, -151, -14, -133, -768, -630, -917, -46, -60, -485, -201, -440, -386, -101, -283, -980, -144, -337, -599, -202, -776, -470, -49, -278, -270, -21, -409, -84, -562, -191, -53, -390, -300, -706, -284, -778, -714, -632, -702, -375, -903, -1019, -475, -353, -950, -410];