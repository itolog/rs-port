import { portfolio } from "@/config";
import Image from "next/image";

import { contactsData } from "@/components/Cards/ContactsCard/data";
import SvgIcons from "@/components/ui/SvgIcon/SvgIcon";

import Ava from "../../../../public/images/ava.jpeg";
import styles from "./styles.module.css";

const ContactsCard = () => {
  return (
    <div className={styles.ContactsCard}>
      <div className={styles.Container}>
        <Image className={styles.Avatar} src={Ava} alt={portfolio.title.label} />
        <h2 className={styles.Title}>{portfolio.title.label}</h2>
        <p className={styles.Description}>{portfolio.title.description}</p>

        <hr />
        <div className={styles.Creator}>
          {contactsData.map(({ link, image }) => {
            return (
              <a key={image} href={link} target={"_blank"}>
                <SvgIcons name={image} size={"40px"} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;
