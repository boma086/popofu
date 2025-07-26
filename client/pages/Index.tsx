import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Battery, Zap, Shield, Users, Building, GraduationCap, Home } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
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
              <a href="#products" className="text-gray-700 hover:text-brand-primary transition-colors">製品</a>
              <a href="#features" className="text-gray-700 hover:text-brand-primary transition-colors">特徴</a>
              <a href="#use-cases" className="text-gray-700 hover:text-brand-primary transition-colors">活用事例</a>
              <Button className="bg-brand-primary hover:bg-brand-accent text-white">
                お問い合わせ
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
                <Badge className="bg-brand-light text-brand-dark px-4 py-2 text-sm font-medium">
                  初めまして
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-brand-primary">ポポフ</span>
                  <br />
                  <span className="text-3xl lg:text-4xl text-gray-700">Portable Power Hub</span>
                  <br />
                  <span className="text-2xl lg:text-3xl text-gray-600">です。</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  オフィス、教育現場、日常生活における<br />
                  <span className="font-semibold text-brand-dark">『電源の不安』</span>を解決するために開発された、<br />
                  次世代型ポータブルバッテリーシリーズです。
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand-primary hover:bg-brand-accent text-white px-8 py-4 text-lg"
                >
                  製品を見る
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-brand-primary text-brand-primary hover:bg-brand-light px-8 py-4 text-lg"
                >
                  資料請求
                </Button>
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

      {/* Product Showcase */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              使い方に合わせて選べるポポフシリーズ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ご利用環境、ご利用人数に応じて、ポポフシリーズは<br />
              幅広いニーズにお応えします。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* mini Lite5 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-primary">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd3acd03b2c854014a9b46cc431041a29%2F10ee5c46faf645039416874b7ce11a49?format=webp&width=800"
                    alt="mini Lite5"
                    className="w-24 h-16 object-contain"
                  />
                </div>
                <Badge className="mb-4 bg-popohu-blue text-white">mini Lite5</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-4">教育現場での利用に最適</h3>
                <p className="text-gray-600 mb-6">
                  Quadをベースに教育機関、医療機関、オフィスなどの閉域での利��に最適化されたモデル。
                </p>
                <Button variant="outline" className="w-full group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  詳細を見る
                </Button>
              </CardContent>
            </Card>

            {/* mini/Quad */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-primary">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd3acd03b2c854014a9b46cc431041a29%2F84aeed8e43ab42a0a951c064b1df78a6?format=webp&width=800"
                    alt="mini/Quad"
                    className="w-24 h-16 object-contain"
                  />
                </div>
                <Badge className="mb-4 bg-popohu-mint text-gray-800">mini/Quad</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-4">個人で利用のコンパクトサイズ</h3>
                <p className="text-gray-600 mb-6">
                  Quadはminiの4台セット。ロック機能つきチャージステーション。
                </p>
                <Button variant="outline" className="w-full group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  詳細を見る
                </Button>
              </CardContent>
            </Card>

            {/* PoPoHu */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-primary">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd3acd03b2c854014a9b46cc431041a29%2Fef99363022f84e1297f43f59d711d1f2?format=webp&width=800"
                    alt="PoPoHu"
                    className="w-16 h-24 object-contain"
                  />
                </div>
                <Badge className="mb-4 bg-popohu-purple text-white">PoPoHu</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ポポフ初期モデル</h3>
                <p className="text-gray-600 mb-6">
                  複数人で利用を想定。大容量・高出力、持ち歩くなんてシェア。
                </p>
                <Button variant="outline" className="w-full group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  詳細を見る
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">特徴</h2>
            <p className="text-xl text-gray-600">ポポフが選ばれる理由</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                <Battery className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">いつでもどこでも使えるポータブルバッテリー</h3>
              <p className="text-sm text-gray-600">
                電源は探すではなく、持ち歩くもの！。USBケーブル付属などで、いつでもど���でもすぐに使えます。
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">電源工事不要！レイアウト変更にも安心のコストメリット</h3>
              <p className="text-sm text-gray-600">
                オフィスや店舗レイアウトを変えても、今ある電源口はそのままで、電源が必要などころに持ち運んで利用できます。
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">安心・長寿命のリン酸鉄電池採用</h3>
              <p className="text-sm text-gray-600">
                熱暴走・発火リスクが低く、約2000サイクル使用可��。月1%の低放電で、防災備品としても安心。
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                <Home className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">日常利用できる防災備品としても活躍</h3>
              <p className="text-sm text-gray-600">
                災害時に慌てると購入したただけで眠る電池とは異なり、毎日の業務や学びに使いながら備える『日常使いできる防災備品』。
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">活用事例</h2>
            <p className="text-xl text-gray-600">様々な環境でポポフが活躍しています</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Building className="w-16 h-16 text-brand-primary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">オフィス環境</h3>
                <p className="text-gray-600">
                  フリーアドレスオフィスやコワーキングスペースで、電源の場所を選ばずに作業環境を構築できます。
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <GraduationCap className="w-16 h-16 text-brand-primary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">教育現場</h3>
                <p className="text-gray-600">
                  学校や研修施設で、タブレットやノートPCを使った学習をサポート。電源工事不要で導入が簡��です。
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <Users className="w-16 h-16 text-brand-primary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">イベント・会議</h3>
                <p className="text-gray-600">
                  会議室や展示会場、セミナー会場で、参加者のデバイス充電をサポート。設置場所を選びません。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-accent">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              電源の不安を解決しませんか？
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              オフィスのフリーアドレ��から教育現場、災害備蓄まで<br />
              幅広いニーズに応えます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-4 text-lg"
              >
                資料請求・お見積り
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                製品デモを見る
              </Button>
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
                電源の不安を解決する、次世代ポータブルバッテリー
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">製品</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">mini Lite5</a></li>
                <li><a href="#" className="hover:text-white transition-colors">mini/Quad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">PoPoHu</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">資料請求</a></li>
                <li><a href="#" className="hover:text-white transition-colors">技術サポート</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
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
