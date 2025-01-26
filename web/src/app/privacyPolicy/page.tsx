// components
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
// style
import "./privacy.scss";

const Privacy = () => {
  return (
    <>
      <Header />
      <div className="privacy">
        <div className="privacy_wrap">
          <div className="privacy_title">プライバシーポリシー</div>
          <p className="privacy_intro">
            「吃音と仕事データベース」（以下「当サイト」といいます。）をご利用いただくにあたり、以下のプライバシーポリシーを定め、個人情報の適切な取り扱いと保護に努めます。当サイトは、個人情報の保護に関する法律および関連する法令を遵守し、以下の方針に基づいて個人情報を取り扱います。
          </p>

          <ul className="privacy_list">
            <li className="privacy_item">
              <div className="privacy_sub_title">収集する個人情報</div>
              <p className="privacy_description">
                名前、メールアドレス、吃音の体験談に関する内容
                <span>
                  (年代、性別、業種、具体的な仕事内容、今の仕事を選んだ理由、働き方、勤続年数、吃音による仕事の苦労度、仕事中の苦労や工夫、吃音による就職活動の苦労度、就職活動中の苦労や工夫、障害者手帳の有無、当サイト見ている人に向けて等)
                </span>
                を収集いたします。
              </p>
            </li>
            <li className="privacy_item">
              <div className="privacy_sub_title">利用目的</div>
              <p className="privacy_description">
                当サイトで収集した個人情報は、以下の目的で利用致します。
              </p>
              <ul>
                <li>投稿された体験談の掲載および管理を行うため。</li>
                <li>お問い合わせに関する対応およびご連絡を行うため。</li>
                <li>
                  サイト利用者に適切な情報を提供し、利用体験を向上させるため。
                </li>
                <li>利用状況やデータを分析し、サイトの改善に役立てるため。</li>
                <li>当サイトに関する重要な情報をお知らせするため。</li>
              </ul>
            </li>

            <li className="privacy_item">
              <div className="privacy_sub_title">
                個人情報の共有および第三者への提供
              </div>
              <p className="privacy_description">
                当サイトでは以下の場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
              </p>
              <ul>
                <li>ご本人の同意を得た場合。</li>
                <li>
                  人の生命、身体または財産の保護のために必要がある場合で、ご本人の同意を得ることが困難な場合。
                </li>
                <li>
                  業務委託契約に基づき個人情報の取り扱いを外部業者に委託する場合。この場合、適切な監督および管理を行います。
                </li>
                <li> 法令に基づき提供が必要とされる場合。</li>
              </ul>
            </li>

            <li className="privacy_item">
              <div className="privacy_sub_title">
                個人情報の訂正・追加・削除について
              </div>
              <p className="privacy_description">
                ユーザーは、当サイトが保有する自己の個人情報について、訂正、追加、削除のご希望があった場合、速やかに対応いたします。
                {/* 誤った情報が含まれている場合や内容の変更を希望する場合には、当サイトが定める手続きに従い、個人情報の訂正、追加または削除（以下「訂正等」といいます。）を請求することができます。
                当サイトは、ユーザーから訂正等の請求を受け、その請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行います。また、訂正等を行った場合、または訂正等を行わない旨の決定をした場合には、遅滞なくその旨をユーザーに通知します。 */}
              </p>
            </li>

            <li className="privacy_item">
              <div className="privacy_sub_title">
                プライバシーポリシーの変更
              </div>
              <p className="privacy_description">
                当サイトは、本プライバシーポリシーの内容を、事前に通知することなく変更することができるものとします。変更後のプライバシーポリシーは、当サイト上に掲載された時点で効力を生じるものとします。
              </p>
            </li>
          </ul>
          <p className="privacy_date">制定:2025年2月1日</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;

// 127942248
// E94573

// きゅんパス 指定席取ったのですが予約番号が別になっていて別途料金が発生しないか心配で電話
// E48444

// 友人と行くことになっており、そのままきゅんパスと紐付けできるか
