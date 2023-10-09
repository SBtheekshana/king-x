FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/SBtheekshana/king-x /root/SBtheekshana
WORKDIR /root/SBtheekshana/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
