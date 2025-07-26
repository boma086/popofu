import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Battery,
  Zap,
  Shield,
  Users,
  Building,
  GraduationCap,
  Home,
  Target,
  TrendingUp,
  CheckCircle,
  Award,
  Clock,
  Wifi,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-brand-dark">ポポフ</h1>
                <p className="text-sm text-gray-600">Portable Power Hub</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#solutions"
                className="text-gray-700 hover:text-brand-primary transition-colors"
              >
                業界別ソリューション
              </a>
              <a
                href="#roi"
                className="text-gray-700 hover:text-brand-primary transition-colors"
              >
                導入効果
              </a>
              <a
                href="#cases"
                className="text-gray-700 hover:text-brand-primary transition-colors"
              >
                導入実績
              </a>
              <Button className="bg-brand-primary hover:bg-brand-accent text-white">
                無料相談・見積依頼
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-red-100 text-red-800 px-3 py-1 text-xs font-medium">
                    信頼の日本品質
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 px-3 py-1 text-xs font-medium">
                    PSE認証取得済み
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 px-3 py-1 text-xs font-medium">
                    3年保証
                  </Badge>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  電源工事不要で
                  <br />
                  <span className="text-brand-primary">生産性向上</span>
                  <br />
                  <span className="text-3xl lg:text-4xl text-gray-700">
                    ポポフ導入で解決
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  <span className="font-semibold text-red-600">
                    年間1000万円の電源工事費用を削減
                  </span>
                  <br />
                  教育機関・オフィス・イベント会場で
                  <br />
                  すぐに使える次世代ポータブル電源
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-sm text-yellow-800">
                    <strong>導入実績：</strong>
                    全国500+施設で導入済み（教育機関60%、オフィス30%、その他10%）
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-primary hover:bg-brand-accent text-white px-8 py-4 text-lg"
                >
                  無料デモ申込み
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-brand-primary text-brand-primary hover:bg-brand-light px-8 py-4 text-lg"
                >
                  ROI計算書DL
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>即日対応可能</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>全国無料配送</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>24時間サポート</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd3acd03b2c854014a9b46cc431041a29%2F7c2322f402504b9181fd829717350043?format=webp&width=800"
                  alt="PoPoHu Portable Power Hub"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-brand-secondary/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-brand-light/50 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              圧倒的な投資対効果（ROI）を実証
            </h2>
            <p className="text-gray-600">
              導入企業の平均データに基づく効果測定
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-white shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">280%</div>
              <div className="text-sm text-gray-600">36ヶ月平均ROI</div>
            </Card>
            <Card className="p-6 text-center bg-white shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                800万円
              </div>
              <div className="text-sm text-gray-600">電源工事費削減額</div>
            </Card>
            <Card className="p-6 text-center bg-white shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">15%</div>
              <div className="text-sm text-gray-600">従業員満足度向上</div>
            </Card>
            <Card className="p-6 text-center bg-white shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">災害時稼働率</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              業界別最適化モデル
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              各業界の専門ニーズに対応した３つのモデル
              <br />
              <span className="text-brand-primary font-semibold">
                導入効果とコスト削減効果を最大化
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* mini Lite5 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-primary relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-500 text-white text-xs">
                  教育機関人気No.1
                </Badge>
              </div>
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd3acd03b2c854014a9b46cc431041a29%2F10ee5c46faf645039416874b7ce11a49?format=webp&width=800"
                    alt="mini Lite5"
                    className="w-24 h-16 object-contain"
                  />
                </div>
                <Badge className="mb-4 bg-popohu-blue text-white">
                  mini Lite5
                </Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  教育機関専用モデル
                </h3>
                <div className="text-left mb-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>文科省ICT環境整備基準適合</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>チャイルドロック機能搭載</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>年間電気代90%削減実績</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-blue-800 font-semibold">
                    導入校平均ROI: 280%
                  </p>
                  <p className="text-xs text-blue-600">
                    ※36ヶ月使用時の投資回収率
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-brand-primary group-hover:text-white transition-colors"
                >
                  教育機関事例を見る
                </Button>
              </CardContent>
            </Card>

            {/* mini/Quad */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-primary relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-500 text-white text-xs">
                  オフィス導入率No.1
                </Badge>
              </div>
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd3acd03b2c854014a9b46cc431041a29%2F84aeed8e43ab42a0a951c064b1df78a6?format=webp&width=800"
                    alt="mini/Quad"
                    className="w-24 h-16 object-contain"
                  />
                </div>
                <Badge className="mb-4 bg-popohu-mint text-gray-800">
                  mini/Quad
                </Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  フリーアドレス対応モデル
                </h3>
                <div className="text-left mb-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>レイアウト変更コスト0円</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>セキュリティロック標準装備</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>従業員満足度15%向上</span>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-green-800 font-semibold">
                    工事費削減額: 平均800万円
                  </p>
                  <p className="text-xs text-green-600">※100名規模オフィス</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-brand-primary group-hover:text-white transition-colors"
                >
                  オフィス事例を見る
                </Button>
              </CardContent>
            </Card>

            {/* PoPoHu */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-primary relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-purple-500 text-white text-xs">
                  防災備蓄推奨
                </Badge>
              </div>
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd3acd03b2c854014a9b46cc431041a29%2Fef99363022f84e1297f43f59d711d1f2?format=webp&width=800"
                    alt="PoPoHu"
                    className="w-16 h-24 object-contain"
                  />
                </div>
                <Badge className="mb-4 bg-popohu-purple text-white">
                  PoPoHu
                </Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  大規模施設・防災対応モデル
                </h3>
                <div className="text-left mb-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>72時間連続稼働可能</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>防災備蓄品認定取得</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>イベント会場での実績多数</span>
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-purple-800 font-semibold">
                    BCP対策効果: 災害時稼働率98%
                  </p>
                  <p className="text-xs text-purple-600">※2023年災害対応実績</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-brand-primary group-hover:text-white transition-colors"
                >
                  防災事例を見る
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              お客様の声
            </h2>
            <p className="text-xl text-gray-600">
              導入企業の担当者様からの評価
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                <span className="ml-2 text-sm text-gray-600">
                  東京都立○○高校
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                「工事費用ゼロでICT環境を整備できました。生徒たちの学習効率が格段に向上し、年間電気代も大幅に削減できています。」
              </p>
              <div className="text-sm text-gray-500">情報システム担当者</div>
            </Card>

            <Card className="p-6 bg-white">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                <span className="ml-2 text-sm text-gray-600">株式会社○○○</span>
              </div>
              <p className="text-gray-700 mb-4">
                「フリーアドレス導入が簡単にできました。従業員からの評価も高く、生産性向上に直結しています。ROIも期待以上でした。」
              </p>
              <div className="text-sm text-gray-500">総務部長</div>
            </Card>

            <Card className="p-6 bg-white">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                <span className="ml-2 text-sm text-gray-600">○○市役所</span>
              </div>
              <p className="text-gray-700 mb-4">
                「災害時の非常用電源として導入。日常業務でも活用でき、一石二鳥です。BCP対策として非常に有効でした。」
              </p>
              <div className="text-sm text-gray-500">危機管理課長</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              導入から運用まで万全サポート
            </h2>
            <p className="text-xl text-gray-600">
              日本市場に特化した充実のサポート体制
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">無料現地調査</h3>
              <p className="text-sm text-gray-600">
                専門スタッフが現地を訪問し、最適な導入プランをご提案いたします。
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">即日導入可能</h3>
              <p className="text-sm text-gray-600">
                在庫確保により、お急ぎのケースでも即日から導入開始が可能です。
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Wifi className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">24時間監視</h3>
              <p className="text-sm text-gray-600">
                IoT技術により24時間遠隔監視��トラブル発生前に予防対応いたします。
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3年間保証</h3>
              <p className="text-sm text-gray-600">
                業界最長クラスの3年間製品保証と全国対応のアフターサービス。
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-accent">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              まずは無料相談からスタート
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              専門スタッフがお客様の課題をヒアリングし、
              <br />
              最適なソリューションをご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-4 text-lg"
              >
                無料相談・見積依頼
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-brand-primary px-8 py-4 text-lg font-semibold"
              >
                ROI計算書ダウンロード
              </Button>
            </div>
            <div className="text-blue-100 text-sm">
              <p>📞 フリーダイヤル: 0120-XXX-XXX (平日9:00-18:00)</p>
              <p>📧 メール: info@popohu.jp (24時間受付)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">ポポフ</h3>
                  <p className="text-sm text-gray-400">Portable Power Hub</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                電源工事不要で生産性向上を実現する次世代ポータブル電源
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">製品・ソリューション</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    教育機関向け mini Lite5
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    オフィス向け mini/Quad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    大規模施設向け PoPoHu
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    無料相談・見積依頼
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    導入事例・ROI計算書
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    技術サポート
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    製品保証・メンテナンス
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">企業情報</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    会社概要
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    利用規約
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 PoPoHu Portable Power Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
